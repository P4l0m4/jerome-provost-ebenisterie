import { defineComponent, mergeProps, withAsyncContext, ref, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { a as _export_sfc, _ as __nuxt_component_2$1, b as __nuxt_component_1$2, c as colors, d as __nuxt_component_3$1 } from './server.mjs';
import { b as useAsyncStoryblok } from './composable-X-G9GS9J.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "provost" }, _attrs))} data-v-da74421f>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProvostTitle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-da74421f"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SideText",
  __ssrInlineRender: true,
  props: {
    side: { default: "left" },
    variant: { default: "dark" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["wrapper", { small: !_ctx.$slots.subtitle }]
      }, _attrs))} data-v-cb3c2452><div class="${ssrRenderClass([_ctx.side, "side-text"])}" style="${ssrRenderStyle({
        width: _ctx.$slots.subtitle ? "464px" : "340px"
      })}" data-v-cb3c2452><h3 class="${ssrRenderClass([{
        "side-text__title--small": !_ctx.$slots.subtitle
      }, "side-text__title"])}" style="${ssrRenderStyle({
        color: _ctx.variant === "dark" ? unref(colors)["nebulosity"] : unref(colors)["cannoli-cream"]
      })}" data-v-cb3c2452>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h3>`);
      if (_ctx.$slots.subtitle) {
        _push(`<span class="line" data-v-cb3c2452></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="side-text__subtitle" style="${ssrRenderStyle({
        color: _ctx.variant === "dark" ? unref(colors)["nebulosity"] : unref(colors)["cannoli-cream"]
      })}" data-v-cb3c2452>`);
      ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push, _parent);
      _push(`</p>`);
      if (!_ctx.$slots.subtitle) {
        _push(`<span class="line" data-v-cb3c2452></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SideText.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cb3c2452"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CarouselComponent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const story = ([__temp, __restore] = withAsyncContext(() => useAsyncStoryblok("dernieres-realisations", {
      version: "published"
    })), __temp = await __temp, __restore(), __temp);
    ref(null);
    ref(null);
    const showArrows = ref(false);
    const scrollableContainerRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SideText = __nuxt_component_4$1;
      const _component_IconComponent = __nuxt_component_2$1;
      const _component_NuxtLink = __nuxt_component_1$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "carousel" }, _attrs))} data-v-7f0b1bef>`);
      _push(ssrRenderComponent(_component_SideText, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Derni\xE8res r\xE9alisations`);
          } else {
            return [
              createTextVNode("Derni\xE8res r\xE9alisations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="carousel__button" style="${ssrRenderStyle(unref(showArrows) && unref(story).content.slides.length > 4 && unref(scrollableContainerRef).scrollLeft > 0 ? null : { display: "none" })}" data-v-7f0b1bef>`);
      _push(ssrRenderComponent(_component_IconComponent, { icon: "caret_left_bold" }, null, _parent));
      _push(`</button><div class="carousel__container" data-v-7f0b1bef><!--[-->`);
      ssrRenderList(unref(story).content.slides, (slide) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "carousel__container__slide",
          to: `/${slide.path}`,
          key: slide.image.filename
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="carousel__container__slide__img fading"${ssrRenderAttr("src", slide.image.filename)} data-v-7f0b1bef${_scopeId}><span class="carousel__container__slide__name" data-v-7f0b1bef${_scopeId}>${ssrInterpolate(slide.name)}</span>`);
            } else {
              return [
                createVNode("img", {
                  class: "carousel__container__slide__img fading",
                  src: slide.image.filename
                }, null, 8, ["src"]),
                createVNode("span", { class: "carousel__container__slide__name" }, toDisplayString(slide.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><button class="carousel__button" style="${ssrRenderStyle(unref(showArrows) && unref(story).content.slides.length > 4 ? null : { display: "none" })}" data-v-7f0b1bef>`);
      _push(ssrRenderComponent(_component_IconComponent, { icon: "caret_right_bold" }, null, _parent));
      _push(`</button></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CarouselComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7f0b1bef"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InfoBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconComponent = __nuxt_component_2$1;
      const _component_PrimaryButton = __nuxt_component_3$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "info-mini-banner" }, _attrs))} data-v-4f5c1198><p class="info-mini-banner__headline" data-v-4f5c1198> Un projet d\u2019\xE9b\xE9nisterie ou un besoin d&#39;agencement sur-mesure ? </p><div class="info-mini-banner__info" data-v-4f5c1198><span class="info-mini-banner__info__contact-me" data-v-4f5c1198>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "phone",
        size: "1.5rem",
        color: unref(colors)["nebulosity"]
      }, null, _parent));
      _push(`Contactez-moi</span><a href="tel:0623041637" class="info-mini-banner__info__tel" data-v-4f5c1198>06 23 04 16 37</a>`);
      _push(ssrRenderComponent(_component_PrimaryButton, { variant: "chocolate-martini" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Obtenir un devis`);
          } else {
            return [
              createTextVNode("Obtenir un devis")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InfoBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f5c1198"]]);

export { __nuxt_component_2 as _, __nuxt_component_3 as a, __nuxt_component_4 as b, __nuxt_component_4$1 as c };
//# sourceMappingURL=InfoBanner-CX02p6Qp.mjs.map
