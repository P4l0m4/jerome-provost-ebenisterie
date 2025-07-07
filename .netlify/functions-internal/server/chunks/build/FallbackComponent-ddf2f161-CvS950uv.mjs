import { defineComponent, createElementBlock, openBlock, createElementVNode, createTextVNode, toDisplayString } from 'vue';

const d = { class: "fallback-component" }, m = { class: "component" }, i = /* @__PURE__ */ defineComponent({
  __name: "FallbackComponent",
  props: {
    blok: {}
  },
  setup(o) {
    return (e, t) => (openBlock(), createElementBlock("div", d, [
      createElementVNode("p", null, [
        createTextVNode(" Component could not be found for blok "),
        createElementVNode("span", m, toDisplayString(e.blok.component), 1),
        createTextVNode("! Is it configured correctly? ")
      ])
    ]));
  }
});
const u = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [l, s] of e)
    t[l] = s;
  return t;
}, k = /* @__PURE__ */ u(i, [["__scopeId", "data-v-93c770c0"]]);

export { k as default };
//# sourceMappingURL=FallbackComponent-ddf2f161-CvS950uv.mjs.map
