<script setup lang="ts">
import { ref, computed, watch } from "vue";
import references from "@/utils/references.json";
import { jsPDF } from "jspdf";
import logo from "@/assets/images/logojpg.jpg";

const file = ref<File | null>(null);
const imageUrl = computed(() =>
  file.value ? window.URL.createObjectURL(file.value) : ""
);

const colors = ref<string[]>([]);

const selectedReferences = computed(() => {
  if (!colors.value.length) return [];

  const refsWithDistance = colors.value.map((extractedColor) => {
    return references
      .map((ref) => {
        if (!ref.color) return { reference: ref, distance: Infinity };
        const distance = getColorDistance(extractedColor, ref.color);
        return { reference: ref, distance };
      })
      .sort((a, b) => a.distance - b.distance)[0];
  });

  return refsWithDistance
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5)
    .map((item) => item.reference);
});

const selectedReferencesWithoutDuplicates = computed(() => {
  const seen = new Set();
  return selectedReferences.value.filter((ref) => {
    if (seen.has(ref.path)) {
      return false;
    }
    seen.add(ref.path);
    return true;
  });
});

function getColorDistance(color1: string, color2: string) {
  // Vérifie que les couleurs sont au format hex valide
  if (!color1?.match(/^#[0-9A-F]{6}$/i) || !color2?.match(/^#[0-9A-F]{6}$/i)) {
    return Infinity;
  }

  // Convertit les couleurs hex en RGB
  const rgb1 = {
    r: parseInt(color1.slice(1, 3), 16),
    g: parseInt(color1.slice(3, 5), 16),
    b: parseInt(color1.slice(5, 7), 16),
  };
  const rgb2 = {
    r: parseInt(color2.slice(1, 3), 16),
    g: parseInt(color2.slice(3, 5), 16),
    b: parseInt(color2.slice(5, 7), 16),
  };

  // Calcule la distance euclidienne entre les couleurs
  return Math.sqrt(
    Math.pow(rgb1.r - rgb2.r, 2) +
      Math.pow(rgb1.g - rgb2.g, 2) +
      Math.pow(rgb1.b - rgb2.b, 2)
  );
}

function handleFileUpload(event: Event) {
  const uploadedFile = (event.target as HTMLInputElement).files?.[0];
  if (uploadedFile) {
    file.value = uploadedFile;
  }
}

async function extractColors() {
  if (!file.value) return;

  const img = new Image();
  img.src = imageUrl.value;

  await new Promise((resolve) => {
    img.onload = resolve;
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const colorCounts: Record<string, number> = {};
  const colorBins: Record<string, string[]> = {};
  const binSize = 30; // similarity threshold

  // Sample pixels and similar colors
  for (let i = 0; i < imageData.length; i += 16) {
    const r = imageData[i];
    const g = imageData[i + 1];
    const b = imageData[i + 2];

    const hex =
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    // color bin key
    const binKey = [
      Math.floor(r / binSize) * binSize,
      Math.floor(g / binSize) * binSize,
      Math.floor(b / binSize) * binSize,
    ].join(",");

    if (!colorBins[binKey]) {
      colorBins[binKey] = [];
    }
    colorBins[binKey].push(hex);
    colorCounts[hex] = (colorCounts[hex] || 0) + 1;
  }

  // most frequent color from each bin
  const diverseColors = Object.values(colorBins).map((binColors) => {
    return binColors.reduce((mostFrequent, color) => {
      return colorCounts[color] > colorCounts[mostFrequent]
        ? color
        : mostFrequent;
    }, binColors[0]);
  });

  // Sort by frequency then top 6 diverse colors
  colors.value = diverseColors
    .sort((a, b) => colorCounts[b] - colorCounts[a])
    .slice(0, 6);
}

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

async function downloadResult() {
  if (!file.value || colors.value.length === 0) return;

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;

  const logoImg = new Image();
  logoImg.src = logo;
  await new Promise((resolve) => {
    logoImg.onload = resolve;
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = logoImg.width;
  canvas.height = logoImg.height;
  ctx.drawImage(logoImg, 0, 0);
  const logoBase64 = canvas.toDataURL("image/jpeg");

  const logoWidth = 12;
  const logoHeight = 12;
  const logoX = margin;
  const logoY = margin;

  doc.addImage(logoBase64, "JPEG", logoX, logoY, logoWidth, logoHeight);

  doc.setFontSize(16);
  doc.text("JP Ebénisterie", logoX + logoWidth + 5, logoY + logoHeight / 1.6);

  const imgData = imageUrl.value;
  const img = new Image();
  img.src = imgData;
  await new Promise((resolve) => {
    img.onload = resolve;
  });

  // dimensions for smaller image on left side
  let imgWidth = (pageWidth - margin * 3) / 2;
  let imgHeight = (imgWidth * img.height) / img.width;

  if (imgHeight > 400) {
    imgHeight = 400;
    imgWidth = (imgHeight * img.width) / img.height;
  }

  // image format
  const imageFormat = file.value?.type.split("/")[1].toUpperCase() || "JPEG";
  doc.addImage(imgData, imageFormat, margin, margin + 20, imgWidth, imgHeight);

  doc.setFontSize(12);
  colors.value.forEach((color, index) => {
    const x = margin * 2 + imgWidth;
    const y = margin + index * 20;
    // color rectangle
    doc.setFillColor(...hexToRgb(color));
    doc.rect(x, y, 20, 15, "F");

    doc.text(color, x + 25, y + 10);
  });

  if (selectedReferencesWithoutDuplicates.value.length > 0) {
    const refsY = margin + imgHeight + 30;

    selectedReferencesWithoutDuplicates.value.forEach(async (ref, index) => {
      doc.setFontSize(12);
      const textY = refsY + 10 + index * 25;

      // colored square
      doc.setFillColor(...hexToRgb(ref.color));
      doc.rect(margin, textY - 4, 10, 15, "F");

      doc.text(`${ref.title}`, margin + 15, textY);
      doc.text(`Marque: EGGER`, margin + 15, textY + 5);
      doc.text(`Code: ${ref.overline}`, margin + 15, textY + 10);
    });
  }

  doc.setFillColor(240, 240, 229);
  doc.rect(
    0,
    doc.internal.pageSize.getHeight() - 20,
    doc.internal.pageSize.getWidth(),
    20,
    "F"
  );
  doc.setFontSize(20);
  doc.text(
    "Contacter Jérôme Provost au 06 23 04 16 37",
    margin,
    doc.internal.pageSize.getHeight() - 7
  );

  doc.save("palette-jp-ebenisterie.pdf");
}

watch(file, () => {
  if (file.value) {
    extractColors();
  }
});
</script>
<template>
  <section class="tool">
    <div class="tool__file-viewer">
      <img
        v-if="file"
        class="tool__file-viewer__img"
        :src="imageUrl"
        alt="Uploaded image"
      />

      <div
        class="tool__file-viewer__file-uploader"
        :style="{ opacity: file ? 0.4 : 1 }"
      >
        <label
          for="image-upload"
          class="tool__file-viewer__file-uploader__label"
        >
          <IconComponent icon="upload" size="2rem" />
          <span>Téléverser une image</span>
        </label>
        <input
          type="file"
          id="image-upload"
          accept=".webp,.png,.svg"
          class="tool__file-viewer__file-uploader__input"
          @change="handleFileUpload"
        />
      </div>
    </div>
    <div class="tool__file-viewer__palette" v-if="colors.length > 0">
      <div
        class="tool__file-viewer__palette__color"
        v-for="color in colors"
        :key="color"
        :style="{ backgroundColor: color }"
      >
        <span class="tool__file-viewer__palette__color__hex">{{ color }}</span>
      </div>
    </div>
    <div
      class="tool__references"
      v-if="selectedReferencesWithoutDuplicates.length > 0"
    >
      <div
        class="tool__references__reference"
        v-for="reference in selectedReferencesWithoutDuplicates"
        :key="reference.title"
      >
        <img
          :src="reference.srcset"
          :alt="`reference bois ${reference.title}`"
        />
        <span class="tool__references__reference__name"
          ><IconComponent icon="swatches" />{{ reference.title }}</span
        >

        <span class="tool__references__reference__brand"
          ><IconComponent icon="tag" />EGGER</span
        >
        <span class="tool__references__reference__material"
          ><IconComponent icon="nut" />{{ reference.overline }}</span
        >
      </div>
      <PrimaryButton
        v-if="selectedReferencesWithoutDuplicates.length > 0"
        @click="downloadResult"
        style="height: 100%; max-height: inherit"
        >Télécharger le résultat</PrimaryButton
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tool {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem;
    height: fit-content;
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: $laptop-screen) {
    padding: 2rem 4rem;
  }

  &__file-viewer {
    display: flex;
    align-items: center;
    background-color: $base-color-darker;
    width: 100%;
    height: 50svh;
    position: relative;

    @media (min-width: $big-tablet-screen) {
      width: 70vw;
      height: 80svh;
    }

    @media (min-width: $laptop-screen) {
      width: 50vw;
      max-height: inherit;
    }

    &__file-uploader {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;

      &__label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: $medium-text-size;
        font-weight: $bold;
        color: $text-color;
        width: 100%;
        height: 100%;
        text-shadow: $shadow-text;
        cursor: pointer;
      }

      &__input {
        display: none;
      }
    }

    &__img {
      min-width: 280px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__palette {
      gap: 1rem;
      width: 100%;
      height: 100px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

      @media (min-width: $big-tablet-screen) {
        width: 100px;
        height: 80dvh;
        flex-direction: column;
        display: flex;
        align-items: center;
      }

      &__color {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: end;
        border: 1px solid $primary-color;

        @media (min-width: $big-tablet-screen) {
          width: 100px;
          height: 100%;
        }

        &__hex {
          font-size: $main-text-size;
          font-weight: $regular;
          color: $text-color;
          background-color: $primary-color;
          padding: 0.5rem;
          width: 100%;
        }
      }
    }
  }

  &__references {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    gap: 1rem;
    width: 100%;

    @media (min-width: $tablet-screen) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    @media (min-width: $desktop-screen) {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      height: 80dvh;
    }

    &__reference {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      height: fit-content;
      background-color: $primary-color;

      @media (min-width: $big-tablet-screen) {
        height: 100%;
      }

      img {
        width: 100%;
        height: 50%;
        object-fit: cover;
        object-position: center;
      }

      &__name {
        font-size: $main-text-size;
        font-weight: $regular;
        color: $text-color;
        white-space: nowrap;
        display: inlineflex;
        align-items: center;
        gap: 0.5rem;
        padding: 0 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        & span {
          margin-right: 0.5rem;
        }
      }

      &__brand {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0 1rem;
      }

      &__material {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0 1rem 1rem 1rem;
      }
    }
  }
}
</style>
