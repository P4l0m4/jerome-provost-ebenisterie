import { _ as __nuxt_component_0 } from './Breadcrumbs-D6kMZRbn.mjs';
import { a as _export_sfc, e as useRoute, C as Ce, b as __nuxt_component_1$2, _ as __nuxt_component_2$1, d as __nuxt_component_3 } from './server.mjs';
import { s as stringToSlug, _ as __nuxt_component_4 } from './slugify-DiTq_ATR.mjs';
import { _ as __nuxt_component_5 } from './ReferencesComponent-BeOaN2C3.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useAsyncStoryblok, a as useHead$1 } from './composable-X-G9GS9J.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const story = ([__temp, __restore] = withAsyncContext(() => useAsyncStoryblok("dressings", { version: "published" })), __temp = await __temp, __restore(), __temp);
    const route = useRoute();
    const furnitureSlug = route.params.slug;
    const furniture = story.value.content.sections.find(
      (f) => stringToSlug(f.subtitle) === furnitureSlug
    );
    useHead$1({
      title: `${furniture.subtitle} | JP Eb\xE9nisterie`,
      meta: [
        {
          name: "description",
          content: furniture.description
        }
      ]
    });
    const breadcrumbs = [
      {
        name: "Accueil",
        url: "/"
      },
      {
        name: "Dressings",
        url: "/dressings-sur-mesure-savoie"
      },
      {
        name: furniture.subtitle,
        url: (void 0).location.href
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_JsonldBreadcrumbs = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_IconComponent = __nuxt_component_2$1;
      const _component_PrimaryButton = __nuxt_component_3;
      const _component_ImageSlider = __nuxt_component_4;
      const _component_ReferencesComponent = __nuxt_component_5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_JsonldBreadcrumbs, { links: breadcrumbs }, null, _parent));
      _push(`<section class="furniture-page" data-v-e3c8b2f7><div class="furniture-page__wrapper" data-v-e3c8b2f7><div class="furniture-page__wrapper__txt" data-v-e3c8b2f7><h1 class="furniture-page__wrapper__txt__title" data-v-e3c8b2f7>${ssrInterpolate(unref(furniture).title)}</h1><h2 class="furniture-page__wrapper__txt__subtitle" data-v-e3c8b2f7>${ssrInterpolate(unref(furniture).subtitle)}</h2><div class="furniture-page__wrapper__txt__richtext" data-v-e3c8b2f7>${(_a = ("renderRichText" in _ctx ? _ctx.renderRichText : unref(Ce))(unref(furniture).description)) != null ? _a : ""}</div>`);
      if (unref(furniture).collaborationText && unref(furniture).collaborationLink) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "furniture-page__wrapper__txt__collaboration",
          to: unref(furniture).collaborationLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconComponent, {
                icon: "handshake",
                size: "2rem"
              }, null, _parent2, _scopeId));
              _push2(`${ssrInterpolate(unref(furniture).collaborationText)}`);
            } else {
              return [
                createVNode(_component_IconComponent, {
                  icon: "handshake",
                  size: "2rem"
                }),
                createTextVNode(toDisplayString(unref(furniture).collaborationText), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact-ebeniste-savoie",
        style: { "margin-top": "auto" },
        "aria-label": "Parlons de votre projet"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PrimaryButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Parlons de votre projet`);
                } else {
                  return [
                    createTextVNode("Parlons de votre projet")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PrimaryButton, null, {
                default: withCtx(() => [
                  createTextVNode("Parlons de votre projet")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ImageSlider, {
        images: unref(furniture).images
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ReferencesComponent, {
        references: unref(furniture).references
      }, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dressings-sur-mesure-savoie/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3c8b2f7"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BbKm43ru.mjs.map
