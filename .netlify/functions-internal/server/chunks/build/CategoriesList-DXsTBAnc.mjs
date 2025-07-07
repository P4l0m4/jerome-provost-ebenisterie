import { b as buildAssetsURL } from '../_/nitro.mjs';
import { a as _export_sfc, b as __nuxt_component_1$2, _ as __nuxt_component_2$1, c as colors } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';

const cuisine = "" + buildAssetsURL("cuisine-sur-mesure-1.Bs1rtf6b.webp");
const cuisine2 = "" + buildAssetsURL("cuisine-sur-mesure-2.CPkV4Shp.webp");
const cuisine3 = "" + buildAssetsURL("cuisine-sur-mesure-3.B5vSrO2f.webp");
const dressing1 = "" + buildAssetsURL("dressings-sur-mesure-1.D4K_97bc.webp");
const dressing2 = "" + buildAssetsURL("dressings-sur-mesure-2.Bn_a_OA5.webp");
const dressing3 = "" + buildAssetsURL("dressings-sur-mesure-3.CthoSwQ-.webp");
const salleDeBain1 = "" + buildAssetsURL("salle-de-bain-sur-mesure-1.CblOPvkg.webp");
const salleDeBain2 = "" + buildAssetsURL("salle-de-bain-sur-mesure-2.BrfVVY_o.webp");
const salleDeBain3 = "" + buildAssetsURL("salle-de-bain-sur-mesure-3.CgYTZOcF.webp");
const bureau1 = "" + buildAssetsURL("bureau-sur-mesure-1.CWXW-u4C.webp");
const bureau = "" + buildAssetsURL("bureau-sur-mesure.DV-tqwQZ.webp");
const comptoir1 = "" + buildAssetsURL("comptoir-sur-mesure-1.BxHgRtkO.webp");
const cave1 = "" + buildAssetsURL("cave-a-vin-sur-mesure-1.CPqE-D5-.webp");
const cave2 = "" + buildAssetsURL("cave-a-vin-sur-mesure-2.BR8aO0OS.webp");
const cave3 = "" + buildAssetsURL("cave-a-vin-sur-mesure-3.CFtekHTo.webp");
const table = "" + buildAssetsURL("table-sur-mesure-1.yhiET75o.webp");
const table2 = "" + buildAssetsURL("table-sur-mesure-2.m1YYc-HG.webp");
const table3 = "" + buildAssetsURL("table-sur-mesure-3.W5N9In0_.webp");
const meubleTele1 = "" + buildAssetsURL("meuble-tele-sur-mesure-1.D2VYchNW.webp");
const claustra1 = "" + buildAssetsURL("claustra-sur-mesure-1.DD7lmCzo.webp");
const cheminee1 = "" + buildAssetsURL("coin-cheminee-sur-mesure-1.BoZythXk.webp");
const salon1 = "" + buildAssetsURL("salon-sur-mesure-1.Cb5EvlYF.webp");
const salon2 = "" + buildAssetsURL("salon-sur-mesure-2.ChpONfvy.webp");
const salon3 = "" + buildAssetsURL("salle-a-manger-sur-mesure-1.D6vBubcu.webp");
const categories = [
  {
    title: "Cuisines sur mesure",
    description: "Toutes nos cr\xE9ations de cuisines sur mesure, cuisines en bois, cuisines avec un plan de travail en marbre, cuisines modernes, etc.",
    category: "Cuisines",
    images: [cuisine3, cuisine2, cuisine],
    link: "/cuisine-sur-mesure-savoie"
  },
  {
    title: "Dressings sur mesure",
    description: "Toutes nos cr\xE9ations de dressings sur mesure, dressings en bois, dressings modernes, rangements sur mesure, etc.",
    category: "Dressings",
    images: [dressing3, dressing2, dressing1],
    link: "/dressings-sur-mesure-savoie"
  },
  {
    title: "Salles de bain sur mesure",
    description: "Toutes nos cr\xE9ations de salles de bain sur mesure, salles de bain modernes, salles de bain avec vasque, salles de bain avec douche, salles de bain avec baignoire, etc.",
    category: "Salles de bain",
    images: [salleDeBain1, salleDeBain2, salleDeBain3],
    link: "/salle-de-bain-sur-mesure-savoie"
  },
  {
    title: "Bureaux et magasins sur mesure",
    description: "Toutes nos cr\xE9ations de bureaux et magasins sur mesure, bureaux en bois, magasins en marbre, comptoirs de magasin, comptoirs modernes, etc.",
    category: "bureaux et magasins",
    images: [bureau1, comptoir1, bureau],
    link: "/bureaux-et-magasins-sur-mesure"
  },
  {
    title: "Tables et tables basses sur mesure",
    description: "Toutes nos cr\xE9ations de tables et tables basses sur mesure, tables en bois, tables en marbre, tables de magassalle \xE0 manger, tables industrielles, etc.",
    category: "tables",
    images: [table, table3, table2],
    link: "/tables-et-tables-basses-sur-mesure"
  },
  {
    title: "Caves \xE0 vin sur mesure",
    description: "Toutes nos cr\xE9ations de caves \xE0 vin sur mesure, caves \xE0 vin en bois, caves \xE0 vin modernes, caves \xE0 vin avec rangements, caves \xE0 vin avec bar, etc.",
    category: "caves \xE0 vin",
    images: [cave3, cave1, cave2],
    link: "/cave-a-vin-sur-mesure"
  },
  {
    title: "Salons et salles \xE0 manger sur mesure",
    description: "Toutes nos cr\xE9ations de salons et salles \xE0 manger sur mesure, salons et salles \xE0 manger en bois, salons et salles \xE0 manger haut de gamme.",
    category: "salons et salles \xE0 manger",
    images: [salon1, salon2, salon3],
    link: "/salons-et-salles-a-manger-sur-mesure"
  },
  {
    title: "Autres meubles sur mesure",
    description: "Toutes nos cr\xE9ations de meubles sur mesure originaux, meubles et agencements uniques pour votre int\xE9rieur.",
    category: "autres",
    images: [meubleTele1, cheminee1, claustra1],
    link: "/autres-meubles-sur-mesure"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CategoriesList",
  __ssrInlineRender: true,
  props: {
    categories: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "categories-list" }, _attrs))} data-v-c68b4b10><!--[-->`);
      ssrRenderList("categories" in _ctx ? _ctx.categories : unref(categories), (category) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "categories-list__category",
          to: category.link,
          key: category.category
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="categories-list__category__text" data-v-c68b4b10${_scopeId}><h2 class="categories-list__category__text__title" data-v-c68b4b10${_scopeId}>${ssrInterpolate(category.title)}</h2><p class="categories-list__category__text__description" data-v-c68b4b10${_scopeId}>${ssrInterpolate(category.description)}</p><span class="square-button" data-v-c68b4b10${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconComponent, {
                icon: "caret_right_bold",
                size: "1rem",
                color: unref(colors)["cannoli-cream"]
              }, null, _parent2, _scopeId));
              _push2(`</span></div><div class="categories-list__category__images" data-v-c68b4b10${_scopeId}><!--[-->`);
              ssrRenderList(category.images, (image, index) => {
                _push2(`<div class="categories-list__category__images__img" style="${ssrRenderStyle({
                  backgroundImage: `linear-gradient(45deg, rgba(22, 22, 22, 0.8), transparent 60%), url(${image})`
                })}" data-v-c68b4b10${_scopeId}></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "categories-list__category__text" }, [
                  createVNode("h2", { class: "categories-list__category__text__title" }, toDisplayString(category.title), 1),
                  createVNode("p", { class: "categories-list__category__text__description" }, toDisplayString(category.description), 1),
                  createVNode("span", { class: "square-button" }, [
                    createVNode(_component_IconComponent, {
                      icon: "caret_right_bold",
                      size: "1rem",
                      color: unref(colors)["cannoli-cream"]
                    }, null, 8, ["color"])
                  ])
                ]),
                createVNode("div", { class: "categories-list__category__images" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(category.images, (image, index) => {
                    return openBlock(), createBlock("div", {
                      class: "categories-list__category__images__img",
                      key: index,
                      style: {
                        backgroundImage: `linear-gradient(45deg, rgba(22, 22, 22, 0.8), transparent 60%), url(${image})`
                      }
                    }, null, 4);
                  }), 128))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CategoriesList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c68b4b10"]]);

export { __nuxt_component_2 as _, cuisine as a, bureau as b, categories as c, table as t };
//# sourceMappingURL=CategoriesList-DXsTBAnc.mjs.map
