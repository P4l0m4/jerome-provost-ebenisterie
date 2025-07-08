<script setup lang="ts">
import { ref, shallowRef, onMounted, onBeforeUnmount } from "vue";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import furnitureUrl from "@/assets/furniture/furniture.glb?url";

import qualite from "@/assets/furniture/qualite.webp";
import decoupe from "@/assets/furniture/decoupe.webp";
import rangements from "@/assets/furniture/rangements.webp";

import brownMarble from "@/assets/furniture/brown-marble.jpg";
import wood from "@/assets/furniture/wood.jpg";
import darkWood from "@/assets/furniture/dark-wood.jpg";

interface Point {
  label: string;
  image: string;
  element?: HTMLDivElement;
}

const points = ref<Point[]>([]);

const options = ref();

const appliedTexture = ref("");

const modelIsLoaded = ref(false);

const renderer = shallowRef();

const canvasRef = ref();

const scene = shallowRef();

const camera = shallowRef();

const loadedModel = shallowRef();

function applyTexture(texture: THREE.Texture, label: string) {
  appliedTexture.value = label;
  if (loadedModel.value) {
    loadedModel.value.traverse((child: THREE.Object3D) => {
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
      }
    });
  }
}

onMounted(() => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (!canvasRef.value) {
    console.error("Canvas non monté");
    return;
  }

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

  function animate() {
    requestAnimationFrame(animate);

    renderer.value!.render(scene.value!, camera.value!);

    scene.value!.updateMatrixWorld(true);
  }

  initThree();

  points.value.forEach((pt: Point, i: number) => {
    const el = document.querySelector(`#point-${i}`);
    pt.element = el ? (el as HTMLDivElement) : undefined;
  });

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.value?.updateProjectionMatrix();
    renderer.value?.setSize(newWidth, newHeight);
  });
});

onBeforeUnmount(() => {
  renderer.value.dispose();
  renderer.value.forceContextLoss();

  canvasRef.value.removeEventListener("webglcontextlost", () => {});

  window.removeEventListener("resize", () => {});
});
</script>
<template>
  <ProvostTitle>
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
</template>
<style lang="scss" scoped>
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
    transform: translate(-22rem, 23rem);
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
    transform: translate(23rem, 22rem);
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
