import { _ as __nuxt_component_0 } from './BannerComponent-MzuAcKPr.mjs';
import { _ as __nuxt_component_0$1 } from './Breadcrumbs-D6kMZRbn.mjs';
import { c as categories, a as cuisine, t as table, _ as __nuxt_component_2 } from './CategoriesList-DXsTBAnc.mjs';
import { _ as __nuxt_component_2$1, a as __nuxt_component_3, b as __nuxt_component_4 } from './InfoBanner-CX02p6Qp.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useHead$1 } from './composable-X-G9GS9J.mjs';
import './server.mjs';
import '../_/nitro.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ameublement-professionnel-savoie",
  __ssrInlineRender: true,
  setup(__props) {
    const bannerElements = [
      {
        image: cuisine,
        label: "Tous nos meubles sur mesure",
        link: "/meubles-sur-mesure-savoie"
      },
      {
        image: table,
        label: "Meubles pour particuliers",
        link: "/ameublement-particuliers-savoie"
      }
    ];
    const filteredCategories = categories.filter(
      (category) => category.category === "bureaux et magasins" || category.category === "autres"
    );
    useHead$1({
      title: "Meuble sur mesures en Savoie | J\xE9r\xF4me Provost Eb\xE9nisterie",
      meta: [
        {
          name: "description",
          content: "Creation meubles sur mesures \xE0 Chamb\xE9ry en Savoie. D\xE9couvrez tous nos meubles sur mesure, cuisines, biblioth\xE8ques, dressings sur mesure, maisons et bureaux sur mesure."
        }
      ]
    });
    const breadcrumbs = [
      {
        name: "Accueil",
        url: "/"
      },
      {
        name: "Ameublement professionnel",
        url: "/ameublement-professionnel-savoie"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BannerComponent = __nuxt_component_0;
      const _component_JsonldBreadcrumbs = __nuxt_component_0$1;
      const _component_CategoriesList = __nuxt_component_2;
      const _component_ProvostTitle = __nuxt_component_2$1;
      const _component_CarouselComponent = __nuxt_component_3;
      const _component_InfoBanner = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_BannerComponent, { "banner-elements": bannerElements }, null, _parent));
      _push(ssrRenderComponent(_component_JsonldBreadcrumbs, { links: breadcrumbs }, null, _parent));
      _push(ssrRenderComponent(_component_CategoriesList, { categories: unref(filteredCategories) }, null, _parent));
      _push(ssrRenderComponent(_component_ProvostTitle, null, null, _parent));
      _push(ssrRenderComponent(_component_CarouselComponent, null, null, _parent));
      _push(ssrRenderComponent(_component_InfoBanner, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ameublement-professionnel-savoie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ameublement-professionnel-savoie-Cp09wgZ3.mjs.map
