import { b as buildAssetsURL } from '../_/nitro.mjs';
import { a as _export_sfc, _ as __nuxt_component_2$1, c as colors } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';

const placeholder1 = "" + buildAssetsURL("placeholder1.Dol1tT4R.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImageSlider",
  __ssrInlineRender: true,
  props: {
    images: { default: () => [
      {
        id: 21583098,
        alt: "",
        name: "",
        focus: "",
        title: "",
        source: "",
        filename: placeholder1,
        copyright: "",
        fieldtype: "asset",
        meta_data: {}
      }
    ] }
  },
  setup(__props) {
    const currentIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider" }, _attrs))} data-v-5c29ba4d><span class="icon-circle noselect" data-v-5c29ba4d>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "caret_left_bold",
        size: "1rem",
        color: unref(colors)["nebulosity"]
      }, null, _parent));
      _push(`</span><!--[-->`);
      ssrRenderList(_ctx.images, (img, index) => {
        _push(`<img class="slider__img"${ssrRenderAttr("src", img.filename)}${ssrRenderAttr("alt", img.alt)} style="${ssrRenderStyle(index === currentIndex.value ? null : { display: "none" })}" data-v-5c29ba4d>`);
      });
      _push(`<!--]--><span class="icon-circle noselect" data-v-5c29ba4d>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "caret_right_bold",
        size: "1rem",
        color: unref(colors)["nebulosity"]
      }, null, _parent));
      _push(`</span></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c29ba4d"]]);
function stringToSlug(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s-]+/g, "").replace(/\s+/g, "-").toLowerCase();
}

export { __nuxt_component_4 as _, stringToSlug as s };
//# sourceMappingURL=slugify-DiTq_ATR.mjs.map
