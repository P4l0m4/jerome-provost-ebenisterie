<script setup lang="ts">
import { ref, shallowRef, onMounted } from "vue";
import { isMobile } from "@/utils/functions";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import furnitureUrl from "@/assets/furniture/furniture.glb?url";

import cuisine from "@/assets/images/cuisine-sur-mesure.jpg";
import dressing from "@/assets/images/dressing-sur-mesure.jpg";
import salleDeBain from "@/assets/images/salle-de-bain-sur-mesure.webp";

import qualite from "@/assets/furniture/qualite.webp";
import decoupe from "@/assets/furniture/decoupe.webp";
import rangements from "@/assets/furniture/rangements.webp";

import brownMarble from "@/assets/furniture/brown-marble.jpg";
import wood from "@/assets/furniture/wood.jpg";
import darkWood from "@/assets/furniture/dark-wood.jpg";

const bannerElements = [
  {
    image: cuisine,
    label: "Cuisine sur mesure",
    link: "/cuisine-sur-mesure-savoie",
  },
  {
    image: dressing,
    label: "Dressings sur mesure",
    link: "/dressings-sur-mesure-savoie",
  },
  {
    image: salleDeBain,
    label: "Salle de bain sur mesure",
    link: "/salle-de-bain-sur-mesure-savoie",
  },
];

const points = ref();

const options = ref();

const appliedTexture = ref("");

const modelIsLoaded = ref(false);

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "Jérôme Provost Ebénisterie",
  address: {
    "@type": "PostalAddress",
    streetAddress: "72 rue du clos",
    addressLocality: "Saint-alban-leysse",
    addressCountry: "France",
    postalCode: "73230",
  },
  email: "jp.ebenisterie73]@gmail.com",
  telephone: "06 23 04 16 37",
  url: "https://www.jp-ebenisterie-chambery.fr",
  openingHours: [
    "Tu-Fr 09:00-12:00",
    "Tu-Fr 14:00-19:00",
    "Sa 10:00-12:00",
    "Sa 14:00-18:00",
  ],
  priceRange: "€€€",
}));

useHead({
  title: "Jérôme Provost Ebénisterie | Ébéniste agenceur en Savoie",
  meta: [
    {
      name: "description",
      content:
        "Jérôme Provost Ebénisterie, Ebéniste agenceur à Chambéry en Savoie. Conception et réalisation de meubles sur mesure, cuisines, bibliothèques, dressings sur mesure, maisons et bureaux sur mesure.",
    },
  ],
});

onMounted(async () => {
  if (isMobile()) {
    console.log("Mobile device detected, skipping 3D model initialization.");
    return;
  }

  const width = window.innerWidth,
    height = window.innerHeight;
  const camera = shallowRef<THREE.PerspectiveCamera | null>(null);
  const scene = shallowRef<THREE.Scene | null>(null);
  const renderer = shallowRef<THREE.WebGLRenderer | null>(null);

  const loadedModel = ref<THREE.Object3D | null>(null);

  const canvasRef = ref<HTMLCanvasElement | OffscreenCanvas | undefined>(
    undefined
  );

  const textureLoader = new THREE.TextureLoader();

  const brownMarbleTexture = textureLoader.load(brownMarble, (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    texture.rotation = Math.PI / 2;
  });
  const woodTexture = textureLoader.load(wood, (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    texture.rotation = Math.PI / 2;
  });
  const darkWoodTexture = textureLoader.load(darkWood, (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    texture.rotation = Math.PI / 2;
  });

  options.value = [
    {
      label: "wood",
      preview: wood,
      texture: woodTexture,
    },
    {
      label: "brownMarble",
      preview: brownMarble,
      texture: brownMarbleTexture,
    },
    {
      label: "darkWood",
      preview: darkWood,
      texture: darkWoodTexture,
    },
  ];

  points.value = [
    {
      label: "Matériaux de qualité",
      image: qualite,
      element: document.querySelector("#point-0") as HTMLDivElement | undefined,
    },
    {
      label: "Découpe sur mesure",
      image: decoupe,
      element: document.querySelector("#point-1") as HTMLDivElement | undefined,
    },
    {
      label: "Rangements intelligents",
      image: rangements,
      element: document.querySelector("#point-2") as HTMLDivElement | undefined,
    },
  ];

  function initThree() {
    camera.value = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
    camera.value.position.z = 1;
    camera.value.position.set(0, 3, 3);
    camera.value.lookAt(0, 0, 0);

    scene.value = new THREE.Scene();

    const occluders: THREE.Object3D[] = [];
    const loader = new GLTFLoader();

    loader.load(
      furnitureUrl,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);

        loadedModel.value = model;
        scene.value?.add(model);
        occluders.push(model);
        applyTexture(woodTexture, "wood");
      },
      (xhr) => {
        if (xhr.loaded === xhr.total) {
          modelIsLoaded.value = true;
        }
      },
      (err) => {
        console.error("Erreur de chargement GLTF:", err);
      }
    );

    const pointLight = new THREE.PointLight(0xf5edbe, 100);
    const pointLight2 = new THREE.PointLight(0xf5edbe, 40);
    const ambientLight = new THREE.AmbientLight(0xf5edbe, 10);

    pointLight.position.set(0, 4, 0);
    pointLight2.position.set(0, 1, 2);
    ambientLight.position.set(0, 1, 0);

    scene.value?.add(pointLight, pointLight2, ambientLight);

    renderer.value = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.value,
      alpha: true,
    });

    renderer.value.setSize(width, height);
    renderer.value.setAnimationLoop(animate);
    renderer.value.setPixelRatio(window.devicePixelRatio);
    renderer.value.setClearColor(0x000000, 0);
    renderer.value.outputColorSpace = THREE.SRGBColorSpace;
  }

  function applyTexture(texture: THREE.Texture, label: string) {
    appliedTexture.value = label;
    if (loadedModel.value) {
      loadedModel.value.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name === "Counter") {
          child.material.map = texture;
          child.material.roughness = 0.5;
          child.material.needsUpdate = true;
        } else if (child instanceof THREE.Mesh && child.name === "Counter001") {
          child.material.map = texture;
          child.material.roughness = 0.5;
          child.material.needsUpdate = true;
        } else if (child instanceof THREE.Mesh) {
          child.material.color.set(0x000000);
          console.log(child.name, "a été mis à jour avec la couleur noire");
        }
      });
    }

    console.log(`Texture appliquée: ${label}`);
  }

  function animate() {
    requestAnimationFrame(animate);

    renderer.value!.render(scene.value!, camera.value!);

    scene.value!.updateMatrixWorld(true);
  }

  initThree();
  points.forEach((pt, i) => {
    const el = document.querySelector(`#point-${i}`);
    pt.element = el ? (el as HTMLDivElement) : undefined;
  });

  const canvas = ref<HTMLCanvasElement | null>(null);

  canvas.value?.addEventListener(
    "webglcontextlost",
    (e) => {
      e.preventDefault();

      canvas.value!.reboot();
      initThree();
    },
    false
  );

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.value?.updateProjectionMatrix();
    renderer.value?.setSize(newWidth, newHeight);
  });
});
</script>
<template>
  <BannerComponent :banner-elements />
  <h1>Jérôme Provost Ebénisterie</h1>
  <ProvostTitle v-if="!isMobile()">
    <canvas ref="canvasRef"></canvas>
    <div class="tag">
      <IconComponent icon="caret_up_bold" style="transform: rotate(45deg)" />
      Des meubles minutieusement façonnés à la main, conçus pour sublimer vos
      espaces de vie
    </div>
    <div
      :id="`point-${index}`"
      class="point"
      v-for="(point, index) in points"
      :key="index"
    >
      <IconComponent icon="caret_up_bold" style="transform: rotate(45deg)" />
      <span class="point__label">{{ point.label }}</span
      ><img class="point__image" :src="point.image" alt="image meuble" />
    </div>
    <div class="options">
      <span
        class="options__option"
        :class="{
          'options__option--selected': option.label === appliedTexture,
        }"
        v-for="(option, i) in options"
        :key="i"
        :style="{
          backgroundImage: `url(${option.preview})`,
        }"
        @click="applyTexture(option.texture, option.label)"
      ></span>
    </div>
  </ProvostTitle>
  <CarouselComponent />
  <InfoBanner />
</template>
<style lang="scss" scoped>
h1 {
  font-family: "Italiana", serif;
  font-size: 8vw;
  width: 100%;
  height: 100%;
  font-weight: $regular;
  display: flex;
  justify-content: center;
  padding: 4rem;
  white-space: nowrap;

  @media (min-width: $big-tablet-screen) {
    font-size: 5.5vw;
  }
}

canvas {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.point {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  gap: 1rem;
  padding: 1rem;
  width: 120px;
  height: 160px;
  background-color: $primary-color-faded;
  border-radius: 0 1.5rem 1.5rem 1.5rem;
  backdrop-filter: blur(4px);
  border: 1px solid $primary-color;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -78px;
    width: 80px;
    height: 50px;
    background-image: url("@/assets/furniture/antenne-left.svg");
    background-repeat: no-repeat;
  }

  &__image {
    width: 100%;
    height: 52px;
    object-fit: cover;
    border-radius: 12px;
  }
}

#point-0 {
  border-radius: 1.5rem 0 1.5rem 1.5rem;
  transform: translate(-10rem, 20rem);

  @media (min-width: $big-tablet-screen) {
    transform: translate(-20rem, 21rem);
  }

  @media (min-width: $desktop-screen) {
    transform: translate(-23rem, 25rem);
  }

  &::before {
    left: 118px;
    background-image: url("@/assets/furniture/antenne-right.svg");
  }
}
#point-1 {
  transform: translate(4rem, 16rem);

  @media (min-width: $big-tablet-screen) {
    transform: translate(6rem, 16rem);
  }

  @media (min-width: $desktop-screen) {
    transform: translate(8rem, 19rem);
  }
}

#point-2 {
  transform: translate(8rem, 18rem);

  @media (min-width: $big-tablet-screen) {
    transform: translate(22rem, 20rem);
  }

  @media (min-width: $desktop-screen) {
    transform: translate(23rem, 20rem);
  }
}

.tag {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  gap: 1rem;
  padding: 1rem;
  width: 15.25rem;
  height: fit-content;
  background-color: $primary-color-faded;
  border-radius: 1.5rem 0 1.5rem 1.5rem;
  backdrop-filter: blur(4px);
  border: 1px solid $primary-color;
  z-index: 1;
  position: absolute;
  top: 2rem;
  left: 2rem;

  @media (min-width: $desktop-screen) {
    top: 4rem;
    left: 4rem;
  }
}

.options {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2rem;
  right: 2rem;
  gap: 1rem;
  z-index: 1;

  @media (min-width: $desktop-screen) {
    top: 4rem;
    right: 4rem;
  }

  &__option {
    width: 3rem;
    height: 3rem;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: 4px solid $primary-color;

    &--selected {
      transform: scale(1.2);
    }
  }
}
</style>
