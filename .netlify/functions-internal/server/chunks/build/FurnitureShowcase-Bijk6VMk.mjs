import { _ as __nuxt_component_4, s as stringToSlug } from './slugify-DiTq_ATR.mjs';
import { a as _export_sfc, C as Ce, b as __nuxt_component_1$2, _ as __nuxt_component_2$1, d as __nuxt_component_3 } from './server.mjs';
import { c as __nuxt_component_4$1 } from './InfoBanner-CX02p6Qp.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FurnitureShowcase",
  __ssrInlineRender: true,
  props: {
    story: {},
    parentSlug: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImageSlider = __nuxt_component_4;
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_IconComponent = __nuxt_component_2$1;
      const _component_PrimaryButton = __nuxt_component_3;
      const _component_SideText = __nuxt_component_4$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "showcase" }, _attrs))} data-v-1dd93cc0><!--[-->`);
      ssrRenderList(_ctx.story.content.sections, (furniture, i) => {
        var _a;
        _push(`<div${ssrRenderAttr("id", i.toString())} class="slider-card" data-v-1dd93cc0>`);
        _push(ssrRenderComponent(_component_ImageSlider, {
          images: furniture.images
        }, null, _parent));
        _push(`<div class="slider-card__text" data-v-1dd93cc0><div class="slider-card__text__description" data-v-1dd93cc0><div class="slider-card__text__description__richtext" data-v-1dd93cc0>${(_a = ("renderRichText" in _ctx ? _ctx.renderRichText : unref(Ce))(furniture.description)) != null ? _a : ""}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `${_ctx.parentSlug}/${unref(stringToSlug)(furniture.subtitle)}`,
          class: "slider-card__text__description__link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Voir plus...`);
            } else {
              return [
                createTextVNode("Voir plus...")
              ];
            }
          }),
          _: 2
        }, _parent));
        if (furniture.collaborationText && furniture.collaborationLink) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "slider-card__text__description__collaboration",
            to: furniture.collaborationLink
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_IconComponent, {
                  icon: "handshake",
                  size: "2rem"
                }, null, _parent2, _scopeId));
                _push2(`${ssrInterpolate(furniture.collaborationText)}`);
              } else {
                return [
                  createVNode(_component_IconComponent, {
                    icon: "handshake",
                    size: "2rem"
                  }),
                  createTextVNode(toDisplayString(furniture.collaborationText), 1)
                ];
              }
            }),
            _: 2
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
                _: 2
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
          _: 2
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_SideText, {
          side: i % 2 === 0 ? "right" : "left"
        }, {
          subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(furniture.subtitle)}`);
            } else {
              return [
                createTextVNode(toDisplayString(furniture.subtitle), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(furniture.title)} `);
            } else {
              return [
                createTextVNode(toDisplayString(furniture.title) + " ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FurnitureShowcase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1dd93cc0"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=FurnitureShowcase-Bijk6VMk.mjs.map
