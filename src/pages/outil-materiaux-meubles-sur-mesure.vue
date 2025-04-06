<script setup lang="ts">
import { ref, computed, watch } from "vue";
import references from "@/utils/references.json";

const file = ref<File | null>(null);
const imageUrl = computed(() =>
  file.value ? window.URL.createObjectURL(file.value) : ""
);

const colors = ref<string[]>([]);

const selectedReferences = computed(() => {
  if (!colors.value.length) return [];

  // Pour chaque couleur extraite, trouve la référence avec la couleur la plus proche
  const refsWithDistance = colors.value.map((extractedColor) => {
    return references
      .map((ref) => {
        const distance = getColorDistance(extractedColor, ref.color);
        return { reference: ref, distance };
      })
      .sort((a, b) => a.distance - b.distance)[0];
  });

  // Trie par distance et prend les 4 plus proches
  return refsWithDistance
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 4)
    .map((item) => item.reference);
});

function getColorDistance(color1: string, color2: string) {
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

  // Sample every 4th pixel for performance
  for (let i = 0; i < imageData.length; i += 16) {
    const r = imageData[i];
    const g = imageData[i + 1];
    const b = imageData[i + 2];

    const hex =
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    colorCounts[hex] = (colorCounts[hex] || 0) + 1;
  }

  // Sort colors by frequency and get top 5
  colors.value = Object.entries(colorCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 4)
    .map(([color]) => color);
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
    <div class="tool__references" v-if="selectedReferences.length > 0">
      <div
        class="tool__references__reference"
        v-for="reference in selectedReferences"
        :key="reference.name"
      >
        <div class="tool__references__reference__preview">
          <img
            :src="reference.image"
            :alt="`reference bois ${reference.name}`"
          />
          <span class="tool__references__reference__preview__name"
            ><IconComponent icon="swatches" />{{ reference.name }}</span
          >
        </div>
        <span class="tool__references__reference__brand"
          ><IconComponent icon="tag" />{{ reference.brand }}</span
        >
        <span class="tool__references__reference__material"
          ><IconComponent icon="nut" />{{ reference.material }}</span
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tool {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem;
    height: fit-content;
  }

  @media (min-width: $laptop-screen) {
    padding: 2rem 4rem;
  }

  &__file-viewer {
    display: flex;
    align-items: center;
    background-color: $base-color-darker;
    width: 50vw;
    height: 80dvh;
    position: relative;

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
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      height: 80dvh;

      &__color {
        width: 100px;
        height: 100%;
        display: flex;
        align-items: end;
        border: 1px solid $base-color;

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
    height: 80dvh;
    max-height: 80dvh;

    &__reference {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 100%;
      max-height: calc(40dvh);
      padding: 1rem;
      background-color: $primary-color;

      &__preview {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 1rem;

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
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }

      &__brand {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      &__material {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
}
</style>
