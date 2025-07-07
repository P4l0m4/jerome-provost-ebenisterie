import { a as _export_sfc, b as __nuxt_component_1$2, d as __nuxt_component_3, c as colors, _ as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "chocolate-martini" },
    direction: { default: "row" },
    icon: {},
    iconSize: {},
    fontSize: { default: "1rem" }
  },
  setup(__props) {
    const props = __props;
    const iconColor = computed(() => {
      switch (props.variant) {
        case "mocha-mousse":
          return colors["lucent-white"];
        case "cannoli-cream":
          return colors["chocolate-martini"];
        case "nebulosity":
          return colors["lucent-white"];
        case "lucent-white":
          return colors["nebulosity"];
        default:
          return colors["cannoli-cream"];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<span${ssrRenderAttrs(mergeProps({
        role: "button",
        tabindex: "0",
        class: ["button noselect", _ctx.variant],
        style: { flexDirection: _ctx.direction, fontSize: _ctx.fontSize }
      }, _attrs))} data-v-4ec85850>`);
      if (_ctx.icon) {
        _push(ssrRenderComponent(_component_IconComponent, {
          icon: _ctx.icon,
          size: _ctx.iconSize || void 0,
          color: iconColor.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SecondaryButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4ec85850"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReferencesComponent",
  __ssrInlineRender: true,
  props: {
    references: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_SecondaryButton = __nuxt_component_1;
      const _component_PrimaryButton = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "references-component" }, _attrs))} data-v-9ecb6b9f>`);
      if (((_a = _ctx.references) == null ? void 0 : _a.length) > 0) {
        _push(`<div class="references-component__references" data-v-9ecb6b9f><!--[-->`);
        ssrRenderList(_ctx.references, (reference) => {
          _push(`<div class="references-component__references__reference" data-v-9ecb6b9f>`);
          if (reference.image.filename) {
            _push(`<img class="references-component__references__reference__img"${ssrRenderAttr("src", reference.image.filename)}${ssrRenderAttr("alt", `meuble sur mesure ${reference.name}`)} data-v-9ecb6b9f>`);
          } else {
            _push(`<span style="${ssrRenderStyle({ backgroundColor: reference.color })}" class="references-component__references__reference__img" data-v-9ecb6b9f></span>`);
          }
          _push(`<div class="references-component__references__reference__txt" data-v-9ecb6b9f><span data-v-9ecb6b9f>${ssrInterpolate(reference.name)}</span><span data-v-9ecb6b9f>${ssrInterpolate(reference.reference)}</span></div></div>`);
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/outil-materiaux-meubles-sur-mesure" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_SecondaryButton, { style: { "height": "100% !important", "width": "100%", "max-width": "initial" } }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Voir d&#39;autres r\xE9f\xE9rences`);
                  } else {
                    return [
                      createTextVNode("Voir d'autres r\xE9f\xE9rences")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_SecondaryButton, { style: { "height": "100% !important", "width": "100%", "max-width": "initial" } }, {
                  default: withCtx(() => [
                    createTextVNode("Voir d'autres r\xE9f\xE9rences")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact-ebeniste-savoie",
          "aria-label": "Parlons de votre projet"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PrimaryButton, { style: { "height": "100% !important", "width": "100%", "max-width": "initial !important" } }, {
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
                createVNode(_component_PrimaryButton, { style: { "height": "100% !important", "width": "100%", "max-width": "initial !important" } }, {
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
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReferencesComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ecb6b9f"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=ReferencesComponent-BeOaN2C3.mjs.map
