import { b as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_0 } from './BannerComponent-MzuAcKPr.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_4 } from './InfoBanner-CX02p6Qp.mjs';
import { a as _export_sfc, _ as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, ref, shallowRef, withCtx, createVNode, createBlock, createTextVNode, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import * as THREE from 'three';
import { u as useJsonld, a as useHead$1 } from './composable-X-G9GS9J.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/utc.js';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const cuisine = "" + buildAssetsURL("cuisine-sur-mesure.CjY2BgCr.jpg");
const dressing = "" + buildAssetsURL("dressing-sur-mesure.CZHqObb-.jpg");
const salleDeBain = "" + buildAssetsURL("salle-de-bain-sur-mesure.BA2o4pHt.webp");
const brownMarble = "" + buildAssetsURL("brown-marble.DqdA4ITG.jpg");
const wood = "" + buildAssetsURL("wood.BgbarTwU.jpg");
const darkWood = "" + buildAssetsURL("dark-wood.CilBhPAS.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const bannerElements = [
      {
        image: cuisine,
        label: "Cuisine sur mesure",
        link: "/cuisine-sur-mesure-savoie"
      },
      {
        image: dressing,
        label: "Dressings sur mesure",
        link: "/dressings-sur-mesure-savoie"
      },
      {
        image: salleDeBain,
        label: "Salle de bain sur mesure",
        link: "/salle-de-bain-sur-mesure-savoie"
      }
    ];
    const loadedModel = ref(null);
    const points = [
      {
        label: "Mat\xE9riaux de qualit\xE9",
        image: cuisine,
        element: (void 0).querySelector("#point-0")
      },
      {
        label: "D\xE9coupe sur mesure",
        image: dressing,
        element: (void 0).querySelector("#point-1")
      },
      {
        label: "Rangements intelligents",
        image: salleDeBain,
        element: (void 0).querySelector("#point-2")
      }
    ];
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
    const options = [
      {
        label: "wood",
        preview: wood,
        texture: woodTexture
      },
      {
        label: "brownMarble",
        preview: brownMarble,
        texture: brownMarbleTexture
      },
      {
        label: "darkWood",
        preview: darkWood,
        texture: darkWoodTexture
      }
    ];
    const appliedTexture = ref("");
    (void 0).innerWidth;
    (void 0).innerHeight;
    const camera = shallowRef(null);
    shallowRef(null);
    const renderer = shallowRef(null);
    const canvasRef = ref(
      void 0
    );
    ref(false);
    function applyTexture(texture, label) {
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
            child.material.color.set(0);
            console.log(child.name, "a \xE9t\xE9 mis \xE0 jour avec la couleur noire");
          }
        });
      }
      console.log(`Texture appliqu\xE9e: ${label}`);
    }
    (void 0).addEventListener("resize", () => {
      var _a, _b;
      const newWidth = (void 0).innerWidth;
      const newHeight = (void 0).innerHeight;
      (_a = camera.value) == null ? void 0 : _a.updateProjectionMatrix();
      (_b = renderer.value) == null ? void 0 : _b.setSize(newWidth, newHeight);
    });
    useJsonld(() => ({
      "@context": "https://schema.org",
      "@type": "FurnitureStore",
      name: "J\xE9r\xF4me Provost Eb\xE9nisterie",
      address: {
        "@type": "PostalAddress",
        streetAddress: "72 rue du clos",
        addressLocality: "Saint-alban-leysse",
        addressCountry: "France",
        postalCode: "73230"
      },
      email: "jp.ebenisterie73]@gmail.com",
      telephone: "06 23 04 16 37",
      url: "https://www.jp-ebenisterie-chambery.fr",
      openingHours: [
        "Tu-Fr 09:00-12:00",
        "Tu-Fr 14:00-19:00",
        "Sa 10:00-12:00",
        "Sa 14:00-18:00"
      ],
      priceRange: "\u20AC\u20AC\u20AC"
    }));
    useHead$1({
      title: "J\xE9r\xF4me Provost Eb\xE9nisterie | \xC9b\xE9niste agenceur en Savoie",
      meta: [
        {
          name: "description",
          content: "J\xE9r\xF4me Provost Eb\xE9nisterie, Eb\xE9niste agenceur \xE0 Chamb\xE9ry en Savoie. Conception et r\xE9alisation de meubles sur mesure, cuisines, biblioth\xE8ques, dressings sur mesure, maisons et bureaux sur mesure."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BannerComponent = __nuxt_component_0;
      const _component_ProvostTitle = __nuxt_component_2;
      const _component_IconComponent = __nuxt_component_2$1;
      const _component_CarouselComponent = __nuxt_component_3;
      const _component_InfoBanner = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_BannerComponent, { "banner-elements": bannerElements }, null, _parent));
      _push(`<h1 data-v-1505e016>J\xE9r\xF4me Provost Eb\xE9nisterie</h1>`);
      _push(ssrRenderComponent(_component_ProvostTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<canvas data-v-1505e016${_scopeId}></canvas><div class="tag" data-v-1505e016${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconComponent, {
              icon: "caret_up_bold",
              style: { "transform": "rotate(45deg)" }
            }, null, _parent2, _scopeId));
            _push2(` Des meubles minutieusement fa\xE7onn\xE9s \xE0 la main, con\xE7us pour sublimer vos espaces de vie </div><!--[-->`);
            ssrRenderList(points, (point, index2) => {
              _push2(`<div${ssrRenderAttr("id", `point-${index2}`)} class="point" data-v-1505e016${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconComponent, {
                icon: "caret_up_bold",
                style: { "transform": "rotate(45deg)" }
              }, null, _parent2, _scopeId));
              _push2(`<span class="point__label" data-v-1505e016${_scopeId}>${ssrInterpolate(point.label)}</span><img class="point__image"${ssrRenderAttr("src", point.image)} alt="image meuble" data-v-1505e016${_scopeId}></div>`);
            });
            _push2(`<!--]--><div class="options" data-v-1505e016${_scopeId}><!--[-->`);
            ssrRenderList(options, (option, i) => {
              _push2(`<span class="${ssrRenderClass([{
                "options__option--selected": option.label === appliedTexture.value
              }, "options__option"])}" style="${ssrRenderStyle({
                backgroundImage: `url(${option.preview})`
              })}" data-v-1505e016${_scopeId}></span>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("canvas", {
                ref_key: "canvasRef",
                ref: canvasRef
              }, null, 512),
              createVNode("div", { class: "tag" }, [
                createVNode(_component_IconComponent, {
                  icon: "caret_up_bold",
                  style: { "transform": "rotate(45deg)" }
                }),
                createTextVNode(" Des meubles minutieusement fa\xE7onn\xE9s \xE0 la main, con\xE7us pour sublimer vos espaces de vie ")
              ]),
              (openBlock(), createBlock(Fragment, null, renderList(points, (point, index2) => {
                return createVNode("div", {
                  id: `point-${index2}`,
                  class: "point",
                  key: index2
                }, [
                  createVNode(_component_IconComponent, {
                    icon: "caret_up_bold",
                    style: { "transform": "rotate(45deg)" }
                  }),
                  createVNode("span", { class: "point__label" }, toDisplayString(point.label), 1),
                  createVNode("img", {
                    class: "point__image",
                    src: point.image,
                    alt: "image meuble"
                  }, null, 8, ["src"])
                ], 8, ["id"]);
              }), 64)),
              createVNode("div", { class: "options" }, [
                (openBlock(), createBlock(Fragment, null, renderList(options, (option, i) => {
                  return createVNode("span", {
                    class: ["options__option", {
                      "options__option--selected": option.label === appliedTexture.value
                    }],
                    key: i,
                    style: {
                      backgroundImage: `url(${option.preview})`
                    },
                    onClick: ($event) => applyTexture(option.texture, option.label)
                  }, null, 14, ["onClick"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CarouselComponent, null, null, _parent));
      _push(ssrRenderComponent(_component_InfoBanner, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1505e016"]]);

export { index as default };
//# sourceMappingURL=index-BkgTvgbq.mjs.map
