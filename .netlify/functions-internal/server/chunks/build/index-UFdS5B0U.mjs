import { _ as __nuxt_component_0 } from './Breadcrumbs-D6kMZRbn.mjs';
import { _ as __nuxt_component_1 } from './FurnitureShowcase-Bijk6VMk.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_4 } from './InfoBanner-CX02p6Qp.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { b as useAsyncStoryblok, a as useHead$1 } from './composable-X-G9GS9J.mjs';
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
import './slugify-DiTq_ATR.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const story = ([__temp, __restore] = withAsyncContext(() => useAsyncStoryblok("autres-meubles", {
      version: "published"
    })), __temp = await __temp, __restore(), __temp);
    useHead$1({
      title: "Autres meubles sur mesure | J\xE9r\xF4me Provost Eb\xE9nisterie",
      meta: [
        {
          name: "description",
          content: "D\xE9couvrez les meubles sur mesure hors cat\xE9gories. Claustra en bois, coffres de lit sur mesure, encastrement en bois, etc. "
        }
      ]
    });
    const breadcrumbs = [
      {
        name: "Accueil",
        url: (void 0).location.origin
      },
      {
        name: "Autres meubles",
        url: (void 0).location.origin + "/autres-meubles-sur-mesure"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JsonldBreadcrumbs = __nuxt_component_0;
      const _component_FurnitureShowcase = __nuxt_component_1;
      const _component_ProvostTitle = __nuxt_component_2;
      const _component_CarouselComponent = __nuxt_component_3;
      const _component_InfoBanner = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_JsonldBreadcrumbs, { links: breadcrumbs }, null, _parent));
      _push(ssrRenderComponent(_component_FurnitureShowcase, {
        story: unref(story),
        "parent-slug": "/autres-meubles-sur-mesure"
      }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/autres-meubles-sur-mesure/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-UFdS5B0U.mjs.map
