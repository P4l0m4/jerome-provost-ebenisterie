import { computed, hasInjectionContext, inject, ref, watchEffect, watch, getCurrentInstance, unref, version } from 'vue';
import { u as useState, P as Pe, t as tryUseNuxtApp } from './server.mjs';
import { u as useHead$2, h as headSymbol$1 } from '../routes/renderer.mjs';

function injectHead$1(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol$1);
    }
  }));
}
function useHead$1(input, options = {}) {
  const head = injectHead$1(options.nuxt);
  if (head) {
    return useHead$2(input, { head, ...options });
  }
}
const useAsyncStoryblok = async (url, apiOptions = {}, bridgeOptions = {}) => {
  const uniqueKey = `${JSON.stringify(apiOptions)}${url}`;
  const story = useState(`${uniqueKey}-state`);
  const storyblokApiInstance = Pe();
  if (!story.value) {
    const { data } = await storyblokApiInstance.get(
      `cdn/stories/${url}`,
      apiOptions
    );
    story.value = data.story;
  }
  return story;
};
var activeHead;
function getActiveHead() {
  return activeHead;
}
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref3) {
  if (ref3 instanceof Promise || ref3 instanceof Date || ref3 instanceof RegExp)
    return ref3;
  const root = resolveUnref(ref3);
  if (!ref3 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k2 in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k2)) {
        continue;
      }
      if (k2 === "titleTemplate" || k2[0] === "o" && k2[1] === "n") {
        resolved[k2] = unref(root[k2]);
        continue;
      }
      resolved[k2] = resolveUnrefHeadInput(root[k2]);
    }
    return resolved;
  }
  return root;
}
var headSymbol = "usehead";
var _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__unhead_injection_handler__";
function injectHead() {
  if (globalKey in _global) {
    return _global[globalKey]();
  }
  const head = inject(headSymbol);
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
var isFunc = (json) => typeof json === "function";
var useJsonld = (json, options) => {
  if (!json) {
    return;
  }
  const jsonComputed = computed(() => isFunc(json) ? json() : json);
  useHead(() => {
    if (!jsonComputed.value) {
      return {};
    }
    return {
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonComputed.value, null, "")
        }
      ]
    };
  }, options);
};

export { useHead$1 as a, useAsyncStoryblok as b, useJsonld as u };
//# sourceMappingURL=composable-X-G9GS9J.mjs.map
