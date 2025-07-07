import { a as _export_sfc, c as colors, b as __nuxt_component_1$2, _ as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useJsonld } from './composable-X-G9GS9J.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: colors["chocolate-martini"]
    }
  },
  setup(__props) {
    const props = __props;
    useJsonld(() => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: props.links.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumbs" }, _attrs))} data-v-ffcf893c><!--[-->`);
      ssrRenderList(__props.links, (link, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.url,
          class: "breadcrumbs__breadcrumb",
          key: link.name,
          style: {
            color: __props.color,
            pointerEvents: i === __props.links.length - 1 ? "none" : "auto"
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)} `);
              if (i !== __props.links.length - 1) {
                _push2(ssrRenderComponent(_component_IconComponent, {
                  icon: "caret_right_bold",
                  color: __props.color,
                  size: "0.75rem"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(link.name) + " ", 1),
                i !== __props.links.length - 1 ? (openBlock(), createBlock(_component_IconComponent, {
                  key: 0,
                  icon: "caret_right_bold",
                  color: __props.color,
                  size: "0.75rem"
                }, null, 8, ["color"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/jsonld/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ffcf893c"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Breadcrumbs-D6kMZRbn.mjs.map
