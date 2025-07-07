import { a as _export_sfc, b as __nuxt_component_1$2, _ as __nuxt_component_2$1, c as colors } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BannerComponent",
  __ssrInlineRender: true,
  props: {
    bannerElements: { default: () => [
      {
        image: "/assets/images/cuisine-sur-mesure.jpg",
        label: "Cuisine sur mesure",
        link: "/"
      },
      {
        image: "/assets/images/dressing-sur-mesure.jpg",
        label: "Dressing sur mesure",
        link: "/"
      },
      {
        image: "/assets/images/salle-de-bain-sur-mesure.webp",
        label: "Salle de bain sur mesure",
        link: "/"
      }
    ] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-e57b28fa><!--[-->`);
      ssrRenderList(_ctx.bannerElements, (slide, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: slide.link,
          "aria-label": slide.label,
          class: "banner__img",
          key: index,
          style: {
            backgroundImage: `linear-gradient(90deg, rgba(22, 22, 22, 0.6), transparent 60%), url(${slide.image})`
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="banner__img__txt" data-v-e57b28fa${_scopeId}><h2 data-v-e57b28fa${_scopeId}>0.${ssrInterpolate(index + 1)} ${ssrInterpolate(slide.label)}</h2><span class="icon-circle" data-v-e57b28fa${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconComponent, {
                icon: "caret_right_bold",
                size: "1rem",
                color: unref(colors)["nebulosity"]
              }, null, _parent2, _scopeId));
              _push2(`</span></div>`);
            } else {
              return [
                createVNode("div", { class: "banner__img__txt" }, [
                  createVNode("h2", null, "0." + toDisplayString(index + 1) + " " + toDisplayString(slide.label), 1),
                  createVNode("span", { class: "icon-circle" }, [
                    createVNode(_component_IconComponent, {
                      icon: "caret_right_bold",
                      size: "1rem",
                      color: unref(colors)["nebulosity"]
                    }, null, 8, ["color"])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e57b28fa"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=BannerComponent-MzuAcKPr.mjs.map
