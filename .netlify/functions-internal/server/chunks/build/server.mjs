import { defineComponent, shallowRef, h as h$1, resolveComponent, hasInjectionContext, inject, getCurrentInstance, toRef, isRef, computed, mergeProps, ref, useTemplateRef, watch, withCtx, createTextVNode, createVNode, unref, toValue, getCurrentScope, onScopeDispose, createElementBlock, provide, cloneVNode, version, defineAsyncComponent, shallowReactive, Suspense, Fragment, useSSRContext, createApp, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, reactive, effectScope, isReadonly, isShallow, isReactive, toRaw, createBlock, openBlock, nextTick, watchEffect } from 'vue';
import { k as parseQuery, l as hasProtocol, m as joinURL, o as getContext, w as withQuery, q as withTrailingSlash, r as withoutTrailingSlash, s as isScriptProtocol, t as sanitizeStatusCode, $ as $fetch, v as baseURL, x as createHooks, y as executeAsync, h as createError$1, z as toRouteMatcher, A as createRouter$1, B as defu } from '../_/nitro.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale.js';
import utc from 'dayjs/plugin/utc.js';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.17.6";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index-BkgTvgbq.mjs')
  },
  {
    name: "contact-ebeniste-savoie",
    path: "/contact-ebeniste-savoie",
    component: () => import('./contact-ebeniste-savoie-CjU6CcFN.mjs')
  },
  {
    name: "meubles-sur-mesure-savoie",
    path: "/meubles-sur-mesure-savoie",
    component: () => import('./meubles-sur-mesure-savoie-B1tGceg5.mjs')
  },
  {
    name: "cave-a-vin-sur-mesure",
    path: "/cave-a-vin-sur-mesure",
    component: () => import('./index-DkSoFK7u.mjs')
  },
  {
    name: "cave-a-vin-sur-mesure-slug",
    path: "/cave-a-vin-sur-mesure/:slug()",
    component: () => import('./_slug_-CGULN8bZ.mjs')
  },
  {
    name: "ameublement-particuliers-savoie",
    path: "/ameublement-particuliers-savoie",
    component: () => import('./ameublement-particuliers-savoie-BK_hoVca.mjs')
  },
  {
    name: "autres-meubles-sur-mesure",
    path: "/autres-meubles-sur-mesure",
    component: () => import('./index-UFdS5B0U.mjs')
  },
  {
    name: "cuisine-sur-mesure-savoie",
    path: "/cuisine-sur-mesure-savoie",
    component: () => import('./index-CW7u4KUc.mjs')
  },
  {
    name: "meubles-entree-sur-mesure",
    path: "/meubles-entree-sur-mesure",
    component: () => import('./index-CIfoJcq4.mjs')
  },
  {
    name: "ameublement-professionnel-savoie",
    path: "/ameublement-professionnel-savoie",
    component: () => import('./ameublement-professionnel-savoie-Cp09wgZ3.mjs')
  },
  {
    name: "autres-meubles-sur-mesure-slug",
    path: "/autres-meubles-sur-mesure/:slug()",
    component: () => import('./_slug_-KKSipaMA.mjs')
  },
  {
    name: "cuisine-sur-mesure-savoie-slug",
    path: "/cuisine-sur-mesure-savoie/:slug()",
    component: () => import('./_slug_-CuorGGfw.mjs')
  },
  {
    name: "meubles-entree-sur-mesure-slug",
    path: "/meubles-entree-sur-mesure/:slug()",
    component: () => import('./_slug_-GG8fGLK0.mjs')
  },
  {
    name: "buanderie-sur-mesure-savoie",
    path: "/buanderie-sur-mesure-savoie",
    component: () => import('./index-CSjJzoAi.mjs')
  },
  {
    name: "dressings-sur-mesure-savoie",
    path: "/dressings-sur-mesure-savoie",
    component: () => import('./index-B5Glj934.mjs')
  },
  {
    name: "buanderie-sur-mesure-savoie-slug",
    path: "/buanderie-sur-mesure-savoie/:slug()",
    component: () => import('./_slug_-BNtcaw_l.mjs')
  },
  {
    name: "dressings-sur-mesure-savoie-slug",
    path: "/dressings-sur-mesure-savoie/:slug()",
    component: () => import('./_slug_-BbKm43ru.mjs')
  },
  {
    name: "outil-materiaux-meubles-sur-mesure",
    path: "/outil-materiaux-meubles-sur-mesure",
    component: () => import('./outil-materiaux-meubles-sur-mesure-NriIiyKJ.mjs')
  },
  {
    name: "bureaux-et-magasins-sur-mesure",
    path: "/bureaux-et-magasins-sur-mesure",
    component: () => import('./index-Cjbmdz8x.mjs')
  },
  {
    name: "bureaux-et-magasins-sur-mesure-slug",
    path: "/bureaux-et-magasins-sur-mesure/:slug()",
    component: () => import('./_slug_-B4Ca3fm7.mjs')
  },
  {
    name: "salle-de-bain-sur-mesure-savoie",
    path: "/salle-de-bain-sur-mesure-savoie",
    component: () => import('./index-BW64LVOq.mjs')
  },
  {
    name: "salle-de-bain-sur-mesure-savoie-slug",
    path: "/salle-de-bain-sur-mesure-savoie/:slug()",
    component: () => import('./_slug_-BXgvI3nJ.mjs')
  },
  {
    name: "tables-et-tables-basses-sur-mesure",
    path: "/tables-et-tables-basses-sur-mesure",
    component: () => import('./index-BMXZ7t4z.mjs')
  },
  {
    name: "tables-et-tables-basses-sur-mesure-slug",
    path: "/tables-et-tables-basses-sur-mesure/:slug()",
    component: () => import('./_slug_-bcfDlQeT.mjs')
  },
  {
    name: "salons-et-salles-a-manger-sur-mesure",
    path: "/salons-et-salles-a-manger-sur-mesure",
    component: () => import('./index-B_VFIIV8.mjs')
  },
  {
    name: "salons-et-salles-a-manger-sur-mesure-slug",
    path: "/salons-et-salles-a-manger-sur-mesure/:slug()",
    component: () => import('./_slug_-DFJye61i.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => {
    var _a;
    return (_a = children.default) == null ? void 0 : _a.call(children);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    let position = savedPosition || void 0;
    if (!position && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, "instant", position));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, "instant", position)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, scrollBehaviorType, position) {
  if (position) {
    return position;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: scrollBehaviorType
    };
  }
  return { left: 0, top: 0, behavior: scrollBehaviorType };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      var _a;
      if (mounted.value) {
        const vnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h$1(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a;
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate(_e2) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h$1(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h$1("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            return props.replace ? router.replace(href.value) : router.push(href.value);
          }
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_1$2 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _0_siteConfig_hxpx9TAykM4St_ybsPIAJmhOKQmae5Yd749dL71wvC8 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a;
    const state = useState("site-config");
    {
      const context = (_a = useRequestEvent()) == null ? void 0 : _a.context;
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = context == null ? void 0 : context.siteConfig.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    let stack = {};
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
var V = Object.defineProperty, D = (o, e, t) => e in o ? V(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t, h = (o, e, t) => (D(o, typeof e != "symbol" ? e + "" : e, t), t);
function C(o) {
  return !(o !== o || o === 1 / 0 || o === -1 / 0);
}
function F(o, e, t) {
  if (!C(e))
    throw new TypeError("Expected `limit` to be a finite number");
  if (!C(t))
    throw new TypeError("Expected `interval` to be a finite number");
  const s = [];
  let r = [], n = 0;
  const i = function() {
    n++;
    const a = setTimeout(function() {
      n--, s.length > 0 && i(), r = r.filter(function(u) {
        return u !== a;
      });
    }, t);
    r.indexOf(a) < 0 && r.push(a);
    const c = s.shift();
    c.resolve(o.apply(c.self, c.args));
  }, l = function(...a) {
    const c = this;
    return new Promise(function(u, p) {
      s.push({
        resolve: u,
        reject: p,
        args: a,
        self: c
      }), n < e && i();
    });
  };
  return l.abort = function() {
    r.forEach(clearTimeout), r = [], s.forEach(function(a) {
      a.reject(function() {
        Error.call(this, "Throttled function aborted"), this.name = "AbortError";
      });
    }), s.length = 0;
  }, l;
}
class b {
  constructor() {
    h(this, "isCDNUrl", (e = "") => e.indexOf("/cdn/") > -1), h(this, "getOptionsPage", (e, t = 25, s = 1) => ({
      ...e,
      per_page: t,
      page: s
    })), h(this, "delay", (e) => new Promise((t) => setTimeout(t, e))), h(this, "arrayFrom", (e = 0, t) => [...Array(e)].map(t)), h(this, "range", (e = 0, t = e) => {
      const s = Math.abs(t - e) || 0, r = e < t ? 1 : -1;
      return this.arrayFrom(s, (n, i) => i * r + e);
    }), h(this, "asyncMap", async (e, t) => Promise.all(e.map(t))), h(this, "flatMap", (e = [], t) => e.map(t).reduce((s, r) => [...s, ...r], [])), h(this, "escapeHTML", function(e) {
      const t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, s = /[&<>"']/g, r = RegExp(s.source);
      return e && r.test(e) ? e.replace(s, (n) => t[n]) : e;
    });
  }
  /**
   * @method stringify
   * @param  {Object} params
   * @param  {String} prefix
   * @param  {Boolean} isArray
   * @return {String} Stringified object
   */
  stringify(e, t, s) {
    const r = [];
    for (const n in e) {
      if (!Object.prototype.hasOwnProperty.call(e, n))
        continue;
      const i = e[n], l = s ? "" : encodeURIComponent(n);
      let a;
      typeof i == "object" ? a = this.stringify(
        i,
        t ? t + encodeURIComponent("[" + l + "]") : l,
        Array.isArray(i)
      ) : a = (t ? t + encodeURIComponent("[" + l + "]") : l) + "=" + encodeURIComponent(i), r.push(a);
    }
    return r.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {String} regionCode region code, could be eu, us or cn
   * @return {String} The base URL of the region
   */
  getRegionURL(e) {
    const t = "api.storyblok.com", s = "api-us.storyblok.com", r = "app.storyblokchina.cn";
    switch (e) {
      case "us":
        return s;
      case "cn":
        return r;
      default:
        return t;
    }
  }
}
const B = function(o, e) {
  const t = {};
  for (const s in o) {
    const r = o[s];
    e.indexOf(s) > -1 && r !== null && (t[s] = r);
  }
  return t;
}, J = (o) => o === "email", K = () => ({
  singleTag: "hr"
}), Y = () => ({
  tag: "blockquote"
}), W = () => ({
  tag: "ul"
}), G = (o) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: o.attrs
    }
  ]
}), Q = () => ({
  singleTag: "br"
}), X = (o) => ({
  tag: `h${o.attrs.level}`
}), Z = (o) => ({
  singleTag: [
    {
      tag: "img",
      attrs: B(o.attrs, ["src", "alt", "title"])
    }
  ]
}), ee = () => ({
  tag: "li"
}), te = () => ({
  tag: "ol"
}), se = () => ({
  tag: "p"
}), re = (o) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": o.attrs.name,
        emoji: o.attrs.emoji
      }
    }
  ]
}), oe = () => ({
  tag: "b"
}), ne = () => ({
  tag: "strike"
}), ie = () => ({
  tag: "u"
}), ae = () => ({
  tag: "strong"
}), le = () => ({
  tag: "code"
}), ce = () => ({
  tag: "i"
}), he = (o) => {
  const e = new b().escapeHTML, t = { ...o.attrs }, { linktype: s = "url" } = o.attrs;
  if (t.href && (t.href = e(o.attrs.href || "")), J(s) && (t.href = `mailto:${t.href}`), t.anchor && (t.href = `${t.href}#${t.anchor}`, delete t.anchor), t.custom) {
    for (const r in t.custom)
      t[r] = t.custom[r];
    delete t.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: t
      }
    ]
  };
}, ue = (o) => ({
  tag: [
    {
      tag: "span",
      attrs: o.attrs
    }
  ]
}), pe = () => ({
  tag: "sub"
}), de = () => ({
  tag: "sup"
}), ge = (o) => ({
  tag: [
    {
      tag: "span",
      attrs: o.attrs
    }
  ]
}), fe = (o) => {
  var e;
  return (e = o.attrs) != null && e.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${o.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, me = (o) => {
  var e;
  return (e = o.attrs) != null && e.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${o.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ye = {
  nodes: {
    horizontal_rule: K,
    blockquote: Y,
    bullet_list: W,
    code_block: G,
    hard_break: Q,
    heading: X,
    image: Z,
    list_item: ee,
    ordered_list: te,
    paragraph: se,
    emoji: re
  },
  marks: {
    bold: oe,
    strike: ne,
    underline: ie,
    strong: ae,
    code: le,
    italic: ce,
    link: he,
    styled: ue,
    subscript: pe,
    superscript: de,
    anchor: ge,
    highlight: fe,
    textStyle: me
  }
}, be = function(o) {
  const e = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, t = /[&<>"']/g, s = RegExp(t.source);
  return o && s.test(o) ? o.replace(t, (r) => e[r]) : o;
};
class k {
  constructor(e) {
    h(this, "marks"), h(this, "nodes"), e || (e = ye), this.marks = e.marks || [], this.nodes = e.nodes || [];
  }
  addNode(e, t) {
    this.nodes[e] = t;
  }
  addMark(e, t) {
    this.marks[e] = t;
  }
  render(e, t = { optimizeImages: false }) {
    if (e && e.content && Array.isArray(e.content)) {
      let s = "";
      return e.content.forEach((r) => {
        s += this.renderNode(r);
      }), t.optimizeImages ? this.optimizeImages(s, t.optimizeImages) : s;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`
    ), "";
  }
  optimizeImages(e, t) {
    let s = 0, r = 0, n = "", i = "";
    typeof t != "boolean" && (typeof t.width == "number" && t.width > 0 && (n += `width="${t.width}" `, s = t.width), typeof t.height == "number" && t.height > 0 && (n += `height="${t.height}" `, r = t.height), (t.loading === "lazy" || t.loading === "eager") && (n += `loading="${t.loading}" `), typeof t.class == "string" && t.class.length > 0 && (n += `class="${t.class}" `), t.filters && (typeof t.filters.blur == "number" && t.filters.blur >= 0 && t.filters.blur <= 100 && (i += `:blur(${t.filters.blur})`), typeof t.filters.brightness == "number" && t.filters.brightness >= -100 && t.filters.brightness <= 100 && (i += `:brightness(${t.filters.brightness})`), t.filters.fill && (t.filters.fill.match(/[0-9A-Fa-f]{6}/g) || t.filters.fill === "transparent") && (i += `:fill(${t.filters.fill})`), t.filters.format && ["webp", "png", "jpeg"].includes(t.filters.format) && (i += `:format(${t.filters.format})`), typeof t.filters.grayscale == "boolean" && t.filters.grayscale && (i += ":grayscale()"), typeof t.filters.quality == "number" && t.filters.quality >= 0 && t.filters.quality <= 100 && (i += `:quality(${t.filters.quality})`), t.filters.rotate && [90, 180, 270].includes(t.filters.rotate) && (i += `:rotate(${t.filters.rotate})`), i.length > 0 && (i = "/filters" + i))), n.length > 0 && (e = e.replace(/<img/g, `<img ${n.trim()}`));
    const l = s > 0 || r > 0 || i.length > 0 ? `${s}x${r}${i}` : "";
    return e = e.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${l}`
    ), typeof t != "boolean" && (t.sizes || t.srcset) && (e = e.replace(/<img.*?src=["|'](.*?)["|']/g, (a) => {
      var c, u;
      const p = a.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g
      );
      if (p && p.length > 0) {
        const g = {
          srcset: (c = t.srcset) == null ? void 0 : c.map((d) => {
            if (typeof d == "number")
              return `//${p}/m/${d}x0${i} ${d}w`;
            if (typeof d == "object" && d.length === 2) {
              let w = 0, j = 0;
              return typeof d[0] == "number" && (w = d[0]), typeof d[1] == "number" && (j = d[1]), `//${p}/m/${w}x${j}${i} ${w}w`;
            }
          }).join(", "),
          sizes: (u = t.sizes) == null ? void 0 : u.map((d) => d).join(", ")
        };
        let v = "";
        return g.srcset && (v += `srcset="${g.srcset}" `), g.sizes && (v += `sizes="${g.sizes}" `), a.replace(/<img/g, `<img ${v.trim()}`);
      }
      return a;
    })), e;
  }
  renderNode(e) {
    const t = [];
    e.marks && e.marks.forEach((r) => {
      const n = this.getMatchingMark(r);
      n && n.tag !== "" && t.push(this.renderOpeningTag(n.tag));
    });
    const s = this.getMatchingNode(e);
    return s && s.tag && t.push(this.renderOpeningTag(s.tag)), e.content ? e.content.forEach((r) => {
      t.push(this.renderNode(r));
    }) : e.text ? t.push(be(e.text)) : s && s.singleTag ? t.push(this.renderTag(s.singleTag, " /")) : s && s.html ? t.push(s.html) : e.type === "emoji" && t.push(this.renderEmoji(e)), s && s.tag && t.push(this.renderClosingTag(s.tag)), e.marks && e.marks.slice(0).reverse().forEach((r) => {
      const n = this.getMatchingMark(r);
      n && n.tag !== "" && t.push(this.renderClosingTag(n.tag));
    }), t.join("");
  }
  renderTag(e, t) {
    return e.constructor === String ? `<${e}${t}>` : e.map((s) => {
      if (s.constructor === String)
        return `<${s}${t}>`;
      {
        let r = `<${s.tag}`;
        if (s.attrs)
          for (const n in s.attrs) {
            const i = s.attrs[n];
            i !== null && (r += ` ${n}="${i}"`);
          }
        return `${r}${t}>`;
      }
    }).join("");
  }
  renderOpeningTag(e) {
    return this.renderTag(e, "");
  }
  renderClosingTag(e) {
    return e.constructor === String ? `</${e}>` : e.slice(0).reverse().map((t) => t.constructor === String ? `</${t}>` : `</${t.tag}>`).join("");
  }
  getMatchingNode(e) {
    const t = this.nodes[e.type];
    if (typeof t == "function")
      return t(e);
  }
  getMatchingMark(e) {
    const t = this.marks[e.type];
    if (typeof t == "function")
      return t(e);
  }
  renderEmoji(e) {
    if (e.attrs.emoji)
      return e.attrs.emoji;
    const t = [
      {
        tag: "img",
        attrs: {
          src: e.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(t, " /");
  }
}
class ke {
  constructor(e) {
    h(this, "baseURL"), h(this, "timeout"), h(this, "headers"), h(this, "responseInterceptor"), h(this, "fetch"), h(this, "ejectInterceptor"), h(this, "url"), h(this, "parameters"), this.baseURL = e.baseURL, this.headers = e.headers || new Headers(), this.timeout = e != null && e.timeout ? e.timeout * 1e3 : 0, this.responseInterceptor = e.responseInterceptor, this.fetch = (...t) => e.fetch ? e.fetch(...t) : fetch(...t), this.ejectInterceptor = false, this.url = "", this.parameters = {};
  }
  /**
   *
   * @param url string
   * @param params ISbStoriesParams
   * @returns Promise<ISbResponse | Error>
   */
  get(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("get");
  }
  post(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("post");
  }
  put(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("put");
  }
  delete(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("delete");
  }
  async _responseHandler(e) {
    const t = [], s = {
      data: {},
      headers: {},
      status: 0,
      statusText: ""
    };
    e.status !== 204 && await e.json().then((r) => {
      s.data = r;
    });
    for (const r of e.headers.entries())
      t[r[0]] = r[1];
    return s.headers = { ...t }, s.status = e.status, s.statusText = e.statusText, s;
  }
  async _methodHandler(e) {
    let t = `${this.baseURL}${this.url}`, s = null;
    if (e === "get") {
      const a = new b();
      t = `${this.baseURL}${this.url}?${a.stringify(
        this.parameters
      )}`;
    } else
      s = JSON.stringify(this.parameters);
    const r = new URL(t), n = new AbortController(), { signal: i } = n;
    let l;
    this.timeout && (l = setTimeout(() => n.abort(), this.timeout));
    try {
      const a = await this.fetch(`${r}`, {
        method: e,
        headers: this.headers,
        body: s,
        signal: i
      });
      this.timeout && clearTimeout(l);
      const c = await this._responseHandler(a);
      return this.responseInterceptor && !this.ejectInterceptor ? this._statusHandler(this.responseInterceptor(c)) : this._statusHandler(c);
    } catch (a) {
      return {
        message: a
      };
    }
  }
  eject() {
    this.ejectInterceptor = true;
  }
  _statusHandler(e) {
    const t = /20[0-6]/g;
    return new Promise((s) => {
      if (t.test(`${e.status}`))
        return s(e);
      const r = {
        message: e.statusText,
        status: e.status,
        response: Array.isArray(e.data) ? e.data[0] : e.data.error || e.data.slug
      };
      throw new Error(JSON.stringify(r));
    });
  }
}
const P = "SB-Agent", R = {
  defaultAgentName: "SB-JS-CLIENT",
  defaultAgentVersion: "SB-Agent-Version",
  packageVersion: "5.14.2"
};
let y = {};
const f = {};
class ve {
  /**
   *
   * @param config ISbConfig interface
   * @param endpoint string, optional
   */
  constructor(e, t) {
    h(this, "client"), h(this, "maxRetries"), h(this, "throttle"), h(this, "accessToken"), h(this, "cache"), h(this, "helpers"), h(this, "resolveCounter"), h(this, "relations"), h(this, "links"), h(this, "richTextResolver"), h(this, "resolveNestedRelations");
    let s = e.endpoint || t;
    if (!s) {
      const i = new b().getRegionURL, l = e.https === false ? "http" : "https";
      e.oauthToken ? s = `${l}://${i(e.region)}/v1` : s = `${l}://${i(e.region)}/v2`;
    }
    const r = new Headers();
    if (r.set("Content-Type", "application/json"), r.set("Accept", "application/json"), e.headers)
      for (const i in e.headers)
        r.set(i, e.headers[i]);
    r.has(P) || (r.set(P, R.defaultAgentName), r.set(
      R.defaultAgentVersion,
      R.packageVersion
    ));
    let n = 5;
    e.oauthToken && (r.set("Authorization", e.oauthToken), n = 3), e.rateLimit && (n = e.rateLimit), e.richTextSchema ? this.richTextResolver = new k(e.richTextSchema) : this.richTextResolver = new k(), e.componentResolver && this.setComponentResolver(e.componentResolver), this.maxRetries = e.maxRetries || 5, this.throttle = F(this.throttledRequest, n, 1e3), this.accessToken = e.accessToken || "", this.relations = {}, this.links = {}, this.cache = e.cache || { clear: "manual" }, this.helpers = new b(), this.resolveCounter = 0, this.resolveNestedRelations = e.resolveNestedRelations || true, this.client = new ke({
      baseURL: s,
      timeout: e.timeout || 0,
      headers: r,
      responseInterceptor: e.responseInterceptor,
      fetch: e.fetch
    });
  }
  setComponentResolver(e) {
    this.richTextResolver.addNode("blok", (t) => {
      let s = "";
      return t.attrs.body && t.attrs.body.forEach((r) => {
        s += e(r.component, r);
      }), {
        html: s
      };
    });
  }
  parseParams(e) {
    return e.version || (e.version = "published"), e.token || (e.token = this.getToken()), e.cv || (e.cv = f[e.token]), Array.isArray(e.resolve_relations) && (e.resolve_relations = e.resolve_relations.join(",")), e;
  }
  factoryParamOptions(e, t) {
    return this.helpers.isCDNUrl(e) ? this.parseParams(t) : t;
  }
  makeRequest(e, t, s, r) {
    const n = this.factoryParamOptions(
      e,
      this.helpers.getOptionsPage(t, s, r)
    );
    return this.cacheResponse(e, n);
  }
  get(e, t) {
    t || (t = {});
    const s = `/${e}`, r = this.factoryParamOptions(s, t);
    return this.cacheResponse(s, r);
  }
  async getAll(e, t, s) {
    const r = (t == null ? void 0 : t.per_page) || 25, n = `/${e}`, i = n.split("/"), l = s || i[i.length - 1], a = 1, c = await this.makeRequest(n, t, r, a), u = c.total ? Math.ceil(c.total / r) : 1, p = await this.helpers.asyncMap(
      this.helpers.range(a, u),
      (g) => this.makeRequest(n, t, r, g + 1)
    );
    return this.helpers.flatMap(
      [c, ...p],
      (g) => Object.values(g.data[l])
    );
  }
  post(e, t) {
    const s = `/${e}`;
    return Promise.resolve(this.throttle("post", s, t));
  }
  put(e, t) {
    const s = `/${e}`;
    return Promise.resolve(this.throttle("put", s, t));
  }
  delete(e, t) {
    const s = `/${e}`;
    return Promise.resolve(this.throttle("delete", s, t));
  }
  getStories(e) {
    return this.get("cdn/stories", e);
  }
  getStory(e, t) {
    return this.get(`cdn/stories/${e}`, t);
  }
  getToken() {
    return this.accessToken;
  }
  ejectInterceptor() {
    this.client.eject();
  }
  _cleanCopy(e) {
    return JSON.parse(JSON.stringify(e));
  }
  _insertLinks(e, t, s) {
    const r = e[t];
    r && r.fieldtype == "multilink" && r.linktype == "story" && typeof r.id == "string" && this.links[s][r.id] ? r.story = this._cleanCopy(this.links[s][r.id]) : r && r.linktype === "story" && typeof r.uuid == "string" && this.links[s][r.uuid] && (r.story = this._cleanCopy(this.links[s][r.uuid]));
  }
  _insertRelations(e, t, s, r) {
    if (s.indexOf(`${e.component}.${t}`) > -1) {
      if (typeof e[t] == "string")
        this.relations[r][e[t]] && (e[t] = this._cleanCopy(
          this.relations[r][e[t]]
        ));
      else if (e[t] && e[t].constructor === Array) {
        const n = [];
        e[t].forEach((i) => {
          this.relations[r][i] && n.push(this._cleanCopy(this.relations[r][i]));
        }), e[t] = n;
      }
    }
  }
  iterateTree(e, t, s) {
    const r = (n) => {
      if (n != null) {
        if (n.constructor === Array)
          for (let i = 0; i < n.length; i++)
            r(n[i]);
        else if (n.constructor === Object) {
          if (n._stopResolving)
            return;
          for (const i in n)
            (n.component && n._uid || n.type === "link") && (this._insertRelations(
              n,
              i,
              t,
              s
            ), this._insertLinks(
              n,
              i,
              s
            )), r(n[i]);
        }
      }
    };
    r(e.content);
  }
  async resolveLinks(e, t, s) {
    let r = [];
    if (e.link_uuids) {
      const n = e.link_uuids.length, i = [], l = 50;
      for (let a = 0; a < n; a += l) {
        const c = Math.min(n, a + l);
        i.push(e.link_uuids.slice(a, c));
      }
      for (let a = 0; a < i.length; a++)
        (await this.getStories({
          per_page: l,
          language: t.language,
          version: t.version,
          by_uuids: i[a].join(",")
        })).data.stories.forEach(
          (c) => {
            r.push(c);
          }
        );
    } else
      r = e.links;
    r.forEach((n) => {
      this.links[s][n.uuid] = {
        ...n,
        _stopResolving: true
      };
    });
  }
  async resolveRelations(e, t, s) {
    let r = [];
    if (e.rel_uuids) {
      const n = e.rel_uuids.length, i = [], l = 50;
      for (let a = 0; a < n; a += l) {
        const c = Math.min(n, a + l);
        i.push(e.rel_uuids.slice(a, c));
      }
      for (let a = 0; a < i.length; a++)
        (await this.getStories({
          per_page: l,
          language: t.language,
          version: t.version,
          by_uuids: i[a].join(",")
        })).data.stories.forEach((c) => {
          r.push(c);
        });
    } else
      r = e.rels;
    r && r.length > 0 && r.forEach((n) => {
      this.relations[s][n.uuid] = {
        ...n,
        _stopResolving: true
      };
    });
  }
  async resolveStories(e, t, s) {
    var r, n;
    let i = [];
    if (this.links[s] = {}, this.relations[s] = {}, typeof t.resolve_relations < "u" && t.resolve_relations.length > 0 && (typeof t.resolve_relations == "string" && (i = t.resolve_relations.split(",")), await this.resolveRelations(e, t, s)), t.resolve_links && ["1", "story", "url", "link"].indexOf(t.resolve_links) > -1 && ((r = e.links) != null && r.length || (n = e.link_uuids) != null && n.length) && await this.resolveLinks(e, t, s), this.resolveNestedRelations)
      for (const l in this.relations[s])
        this.iterateTree(
          this.relations[s][l],
          i,
          s
        );
    e.story ? this.iterateTree(e.story, i, s) : e.stories.forEach((l) => {
      this.iterateTree(l, i, s);
    }), delete this.links[s], delete this.relations[s];
  }
  async cacheResponse(e, t, s) {
    (typeof s > "u" || !s) && (s = 0);
    const r = this.helpers.stringify({ url: e, params: t }), n = this.cacheProvider();
    if (this.cache.clear === "auto" && t.version === "draft" && await this.flushCache(), t.version === "published" && e != "/cdn/spaces/me") {
      const i = await n.get(r);
      if (i)
        return Promise.resolve(i);
    }
    return new Promise(async (i, l) => {
      var a;
      try {
        const c = await this.throttle("get", e, t);
        if (c.status !== 200)
          return l(c);
        let u = { data: c.data, headers: c.headers };
        if ((a = c.headers) != null && a["per-page"] && (u = Object.assign({}, u, {
          perPage: c.headers["per-page"] ? parseInt(c.headers["per-page"]) : 0,
          total: c.headers["per-page"] ? parseInt(c.headers.total) : 0
        })), u.data.story || u.data.stories) {
          const p = this.resolveCounter = ++this.resolveCounter % 1e3;
          await this.resolveStories(u.data, t, `${p}`);
        }
        return t.version === "published" && e != "/cdn/spaces/me" && await n.set(r, u), u.data.cv && t.token && (t.version == "draft" && f[t.token] != u.data.cv && await this.flushCache(), f[t.token] = u.data.cv), i(u);
      } catch (c) {
        if (c.response && c.response.status === 429 && (s = s ? s + 1 : 0, s < this.maxRetries))
          return console.log(`Hit rate limit. Retrying in ${s} seconds.`), await this.helpers.delay(1e3 * s), this.cacheResponse(e, t, s).then(i).catch(l);
        l(c.message);
      }
    });
  }
  throttledRequest(e, t, s) {
    return this.client[e](t, s);
  }
  cacheVersions() {
    return f;
  }
  cacheVersion() {
    return f[this.accessToken];
  }
  setCacheVersion(e) {
    this.accessToken && (f[this.accessToken] = e);
  }
  cacheProvider() {
    switch (this.cache.type) {
      case "memory":
        return {
          get(e) {
            return Promise.resolve(y[e]);
          },
          getAll() {
            return Promise.resolve(y);
          },
          set(e, t) {
            return y[e] = t, Promise.resolve(void 0);
          },
          flush() {
            return y = {}, Promise.resolve(void 0);
          }
        };
      case "custom":
        if (this.cache.custom)
          return this.cache.custom;
      default:
        return {
          get() {
            return Promise.resolve(void 0);
          },
          getAll() {
            return Promise.resolve(void 0);
          },
          set() {
            return Promise.resolve(void 0);
          },
          flush() {
            return Promise.resolve(void 0);
          }
        };
    }
  }
  async flushCache() {
    return await this.cacheProvider().flush(), this;
  }
}
const xe = (o = {}) => {
  const { apiOptions: e } = o;
  if (!e.accessToken) {
    console.error(
      "You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication"
    );
    return;
  }
  return { storyblokApi: new ve(e) };
}, we = (o) => {
  if (typeof o != "object" || typeof o._editable > "u")
    return {};
  const e = JSON.parse(
    o._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
  );
  return e ? {
    "data-blok-c": JSON.stringify(e),
    "data-blok-uid": e.id + "-" + e.uid
  } : {};
};
let T;
const Re = (o = {}) => {
  const {
    bridge: s,
    accessToken: r,
    use: n = [],
    apiOptions: i = {},
    richText: l = {},
    bridgeUrl: a
  } = o;
  i.accessToken = i.accessToken || r;
  const c = { bridge: s, apiOptions: i };
  let u = {};
  n.forEach((g) => {
    u = { ...u, ...g(c) };
  });
  return T = new k(l.schema), l.resolver && I(T, l.resolver), u;
}, I = (o, e) => {
  o.addNode("blok", (t) => {
    let s = "";
    return t.attrs.body.forEach((r) => {
      s += e(r.component, r);
    }), {
      html: s
    };
  });
}, _e = (o) => !o || !(o != null && o.content.some((e) => e.content || e.type === "blok" || e.type === "horizontal_rule")), Ce = (o, e, t) => {
  let s = t || T;
  if (!s) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return _e(o) ? "" : (e && (s = new k(e.schema), e.resolver && I(s, e.resolver)), s.render(o));
}, Te = /* @__PURE__ */ defineComponent({
  __name: "StoryblokComponent",
  props: {
    blok: {}
  },
  setup(o, { expose: e }) {
    const t = o, s = ref();
    e({
      value: s
    });
    const r = typeof resolveDynamicComponent(t.blok.component) != "string", n = inject("VueSDKOptions"), i = ref(t.blok.component);
    return r || (n.enableFallbackComponent ? (i.value = n.customFallbackComponent ?? "FallbackComponent", typeof resolveDynamicComponent(i.value) == "string" && console.error(
      `Is the Fallback component "${i.value}" registered properly?`
    )) : console.error(
      `Component could not be found for blok "${t.blok.component}"! Is it defined in main.ts as "app.component("${t.blok.component}", ${t.blok.component});"?`
    )), (l, a) => (openBlock(), createBlock(resolveDynamicComponent(i.value), mergeProps({
      ref_key: "blokRef",
      ref: s
    }, { ...l.$props, ...l.$attrs }), null, 16));
  }
}), je = {
  beforeMount(o, e) {
    if (e.value) {
      const t = we(e.value);
      Object.keys(t).length > 0 && (o.setAttribute("data-blok-c", t["data-blok-c"]), o.setAttribute("data-blok-uid", t["data-blok-uid"]), o.classList.add("storyblok__outline"));
    }
  }
}, A = (o) => {
  console.error(`You can't use ${o} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `);
};
let m = null;
const Pe = () => (m || A("useStoryblokApi"), m), Ie = {
  install(o, e = {}) {
    o.directive("editable", je), o.component("StoryblokComponent", Te), e.enableFallbackComponent && !e.customFallbackComponent && o.component(
      "FallbackComponent",
      defineAsyncComponent(() => import('./FallbackComponent-ddf2f161-CvS950uv.mjs'))
    );
    const { storyblokApi: t } = Re(e);
    m = t, o.provide("VueSDKOptions", e);
  }
};
const plugin_J2UXS7dnxSvv3PlFW8rqkjoRJICKCPmO_PloFL_AXDo = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  let { storyblok } = (/* @__PURE__ */ useRuntimeConfig()).public;
  storyblok = JSON.parse(JSON.stringify(storyblok));
  vueApp.use(Ie, { ...storyblok, use: [xe] });
});
dayjs.extend(updateLocale);
dayjs.extend(utc);
const plugin_A_mOOaCOuJWV5Ht8_pCnoQk4Wr7Lby7kkLEtrwvUQ5w = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => nuxtApp.provide("dayjs", dayjs));
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
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
var vuePlugin = {
  install(Vue) {
    Vue.mixin({
      created() {
        var _a;
        if (typeof ((_a = this.$options) == null ? void 0 : _a.jsonld) !== "function") {
          return;
        }
        const jsonComputed = computed(() => this.$options.jsonld.call(this));
        useHead(() => ({
          script: [
            {
              type: "application/ld+json",
              children: jsonComputed.value ? JSON.stringify(jsonComputed.value, null, "") : void 0
            }
          ]
        }));
      }
    });
  }
};
var plugin_default = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuePlugin);
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  _0_siteConfig_hxpx9TAykM4St_ybsPIAJmhOKQmae5Yd749dL71wvC8,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  plugin_J2UXS7dnxSvv3PlFW8rqkjoRJICKCPmO_PloFL_AXDo,
  plugin_A_mOOaCOuJWV5Ht8_pCnoQk4Wr7Lby7kkLEtrwvUQ5w,
  plugin_default
];
const layouts = {
  default: defineAsyncComponent(() => import('./default-C3ZnPV1W.mjs').then((m2) => m2.default || m2))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h$1(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? (route == null ? void 0 : route.meta.layout) ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (route == null ? void 0 : route.meta.layoutTransition) ?? appLayoutTransition;
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h$1(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h$1(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              isRenderingNewLayout: (name) => {
                return name !== previouslyRenderedLayout && name === layout.value;
              },
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h$1(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h$1(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1$1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h$1(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h$1(Suspense, { suspensible: true }, {
            default() {
              return h$1(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h$1(slotContent[0]) : h$1(Fragment, void 0, slotContent);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$1;
  const _component_NuxtPage = __nuxt_component_1$1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "IconComponent",
  __ssrInlineRender: true,
  props: {
    icon: {},
    color: {},
    size: { default: "1rem" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: "icon",
        style: { color: _ctx.color, fontSize: _ctx.size }
      }, _attrs))} data-v-bc59bb54>${ssrInterpolate(_ctx.icon)}</span>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IconComponent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-bc59bb54"]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='28'%20height='23'%20viewBox='0%200%2028%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.59636%200.920097V0.600098H8.29236V18.7761C8.29236%2020.4614%207.95102%2021.5921%207.26836%2022.1681C6.58569%2022.7228%205.55102%2023.0001%204.16436%2023.0001C2.79902%2023.0001%201.58302%2022.7974%200.516357%2022.3921L0.612357%2022.1361C1.63636%2022.5414%202.69236%2022.7441%203.78036%2022.7441C4.50569%2022.7441%204.98569%2022.4348%205.22036%2021.8161C5.47636%2021.1974%205.60436%2020.1948%205.60436%2018.8081V0.920097H2.59636Z'%20fill='%23161616'/%3e%3cpath%20d='M12.7714%200.856098C15.246%200.685431%2017.422%200.600098%2019.2994%200.600098C24.59%200.600098%2027.2354%202.46676%2027.2354%206.2001C27.2354%207.9281%2026.7874%209.44276%2025.8914%2010.7441C25.422%2011.4481%2024.6967%2012.0134%2023.7154%2012.4401C22.734%2012.8454%2021.55%2013.0481%2020.1634%2013.0481H15.4274V23.0001H12.7714V0.856098ZM19.3314%200.920097C18.094%200.920097%2016.7927%200.994764%2015.4274%201.1441V12.7281H20.1634C23.1714%2012.6001%2024.6754%2010.4454%2024.6754%206.2641C24.6754%204.55743%2024.2274%203.24543%2023.3314%202.3281C22.4354%201.38943%2021.102%200.920097%2019.3314%200.920097Z'%20fill='%23161616'/%3e%3c/svg%3e";
const colors = {
  "cannoli-cream": "#F0F0E5",
  "lucent-white": "#F3F5F7",
  "mocha-mousse": "#A47764",
  "chocolate-martini": "#56453F",
  nebulosity: "#161616",
  error: "#bb0025",
  "cannoli-cream-darker": "#EAEADD"
};
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window2) {
    return controls ? { stop: noop, cancel: noop, trigger: noop } : noop;
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children))
      return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null)
      return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event))
      return;
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if ("detail" in event && event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window2, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) {
    return {
      stop,
      cancel: () => {
        shouldListen = false;
      },
      trigger: (event) => {
        shouldListen = true;
        listener(event);
        shouldListen = false;
      }
    };
  }
  return stop;
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeaderComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const target = useTemplateRef("target");
    onClickOutside(target, () => isMenuOpen.value = false);
    const route = useRoute$1();
    watch(
      () => route.fullPath,
      () => {
        setTimeout(() => {
          isMenuOpen.value = false;
        }, 400);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-85cf1e9a><nav class="header__nav" data-v-85cf1e9a><ul class="header__nav__links" data-v-85cf1e9a><li class="header__nav__links__link" data-v-85cf1e9a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cuisine-sur-mesure-savoie",
        class: "nuxt-link",
        exact: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cuisine<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
          } else {
            return [
              createTextVNode("Cuisine"),
              createVNode("span", { class: "line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="header__nav__links__link" data-v-85cf1e9a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dressings-sur-mesure-savoie",
        class: "nuxt-link",
        exact: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dressing<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
          } else {
            return [
              createTextVNode("Dressing"),
              createVNode("span", { class: "line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="header__nav__links__link" data-v-85cf1e9a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/salle-de-bain-sur-mesure-savoie",
        class: "nuxt-link",
        exact: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Salle de bain<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
          } else {
            return [
              createTextVNode("Salle de bain"),
              createVNode("span", { class: "line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="header__nav__links__link" data-v-85cf1e9a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ameublement-professionnel-savoie",
        class: "nuxt-link",
        exact: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ameublement professionnel<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
          } else {
            return [
              createTextVNode("Ameublement professionnel"),
              createVNode("span", { class: "line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo noselect"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo jerome provost ebenisterie" data-v-85cf1e9a${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "logo jerome provost ebenisterie"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="right-links" data-v-85cf1e9a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact-ebeniste-savoie",
        class: "nuxt-link",
        exact: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
          } else {
            return [
              createTextVNode("Contact"),
              createVNode("span", { class: "line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="menu-button noselect" aria-label="menu" data-v-85cf1e9a>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: isMenuOpen.value ? "xx" : "list",
        size: "2rem",
        color: unref(colors)["cannoli-cream"]
      }, null, _parent));
      _push(`</button>`);
      if (isMenuOpen.value) {
        _push(`<nav class="right-links__nav" data-v-85cf1e9a><ul class="right-links__nav__links" data-v-85cf1e9a><li class="right-links__nav__links__link" data-v-85cf1e9a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/cave-a-vin-sur-mesure",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Caves à vin<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Caves à vin"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="right-links__nav__links__link" data-v-85cf1e9a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/bureaux-et-magasins-sur-mesure",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Bureaux et magasins<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Bureaux et magasins"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="right-links__nav__links__link" data-v-85cf1e9a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/salons-et-salles-a-manger-sur-mesure",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Salons et salles à manger<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Salons et salles à manger"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="right-links__nav__links__link" data-v-85cf1e9a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/buanderie-sur-mesure-savoie",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Buanderies<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Buanderies"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="right-links__nav__links__link" data-v-85cf1e9a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/meubles-entree-sur-mesure",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Meubles d&#39;entrée<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Meubles d'entrée"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="right-links__nav__links__link" data-v-85cf1e9a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/autres-meubles-sur-mesure",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Autres meubles sur mesure<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Autres meubles sur mesure"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="right-links__nav__links__link" data-v-85cf1e9a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/meubles-sur-mesure-savoie",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Toutes les réalisations sur mesure<span class="line" data-v-85cf1e9a${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Toutes les réalisations sur mesure"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-85cf1e9a"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MobileHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const target = useTemplateRef("target");
    onClickOutside(target, () => isMenuOpen.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header",
        ref_key: "target",
        ref: target
      }, _attrs))} data-v-c598ad9f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo noselect",
        onClick: ($event) => isMenuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo jerome provost ebenisterie" data-v-c598ad9f${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "logo jerome provost ebenisterie"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="menu-button noselect" aria-label="menu" data-v-c598ad9f>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: isMenuOpen.value ? "xx" : "list",
        size: "2rem",
        color: unref(colors)["cannoli-cream"]
      }, null, _parent));
      _push(`</button>`);
      if (isMenuOpen.value) {
        _push(`<nav class="header__nav" data-v-c598ad9f><ul class="header__nav__links" data-v-c598ad9f><li class="header__nav__links__link" data-v-c598ad9f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/cuisine-sur-mesure-savoie",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Cuisines<span class="line" data-v-c598ad9f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Cuisines"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="header__nav__links__link" data-v-c598ad9f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dressings-sur-mesure-savoie",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Dressings<span class="line" data-v-c598ad9f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Dressings"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="header__nav__links__link" data-v-c598ad9f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/salle-de-bain-sur-mesure-savoie",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Salles de bain<span class="line" data-v-c598ad9f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Salles de bain"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="header__nav__links__link" data-v-c598ad9f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/bureaux-et-magasins-sur-mesure",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Bureaux et magasins<span class="line" data-v-c598ad9f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Bureaux et magasins"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="header__nav__links__link" data-v-c598ad9f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/cave-a-vin-sur-mesure",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Caves à vin<span class="line" data-v-c598ad9f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Caves à vin"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="header__nav__links__link" data-v-c598ad9f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/ameublement-professionnel-savoie",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ameublement professionnel<span class="line" data-v-c598ad9f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Ameublement professionnel"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="header__nav__links__link" data-v-c598ad9f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/salons-et-salles-a-manger-sur-mesure",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Salons et salles à manger<span class="line" data-v-c598ad9f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Salons et salles à manger"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="header__nav__links__link" data-v-c598ad9f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/meubles-sur-mesure-savoie",
          class: "nuxt-link",
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Toutes les réalisations sur mesure<span class="line" data-v-c598ad9f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Toutes les réalisations sur mesure"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="header__nav__links__link" data-v-c598ad9f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact-ebeniste-savoie",
          class: "nuxt-link",
          style: { "text-decoration": "underline" },
          exact: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Devis et contact<span class="line" data-v-c598ad9f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Devis et contact"),
                createVNode("span", { class: "line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c598ad9f"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PrimaryButton",
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
      }, _attrs))} data-v-9d4d2793>`);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrimaryButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9d4d2793"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='28'%20height='23'%20viewBox='0%200%2028%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.59625%200.919998V0.599998H8.29225V18.776C8.29225%2020.4613%207.95092%2021.592%207.26825%2022.168C6.58558%2022.7227%205.55092%2023%204.16425%2023C2.79892%2023%201.58292%2022.7973%200.51625%2022.392L0.61225%2022.136C1.63625%2022.5413%202.69225%2022.744%203.78025%2022.744C4.50558%2022.744%204.98558%2022.4347%205.22025%2021.816C5.47625%2021.1973%205.60425%2020.1947%205.60425%2018.808V0.919998H2.59625ZM12.7713%200.855999C15.2459%200.685332%2017.4219%200.599998%2019.2993%200.599998C24.5899%200.599998%2027.2353%202.46667%2027.2353%206.2C27.2353%207.928%2026.7873%209.44267%2025.8913%2010.744C25.4219%2011.448%2024.6966%2012.0133%2023.7153%2012.44C22.7339%2012.8453%2021.5499%2013.048%2020.1633%2013.048H15.4273V23H12.7713V0.855999ZM19.3313%200.919998C18.0939%200.919998%2016.7926%200.994665%2015.4273%201.144V12.728H20.1633C23.1713%2012.6%2024.6753%2010.4453%2024.6753%206.264C24.6753%204.55733%2024.2273%203.24533%2023.3313%202.328C22.4353%201.38933%2021.1019%200.919998%2019.3313%200.919998Z'%20fill='%23F0F0E5'/%3e%3c/svg%3e";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FooterComponent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-bb5cedf1><div class="footer__text" data-v-bb5cedf1><div class="footer__text__column" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo noselect"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo jerome provost ebenisterie" data-v-bb5cedf1${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo jerome provost ebenisterie"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p data-v-bb5cedf1> Ébéniste agenceur passionné situé en Savoie, je conçois et réalise tous types de meubles sur-mesure, en alliant tradition artisanale et modernité. </p><div class="footer__text__column__row-links" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/meubles-sur-mesure-savoie" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Toutes les réalisations sur-mesure`);
          } else {
            return [
              createTextVNode("Toutes les réalisations sur-mesure")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact-ebeniste-savoie",
        style: { "text-decoration": "underline" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Prendre rendez-vous`);
          } else {
            return [
              createTextVNode("Prendre rendez-vous")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="footer__text__column__row-links" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/ameublement-professionnel-savoie" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ameublement professionnel`);
          } else {
            return [
              createTextVNode("Ameublement professionnel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/ameublement-particuliers-savoie" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ameublement pour particuliers`);
          } else {
            return [
              createTextVNode("Ameublement pour particuliers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="footer__text__column__row-links" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/outil-materiaux-meubles-sur-mesure",
        style: { "text-decoration": "underline" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Matériaux à partir d&#39;une image`);
          } else {
            return [
              createTextVNode("Matériaux à partir d'une image")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/autres-meubles-sur-mesure" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Autres meubles sur mesure`);
          } else {
            return [
              createTextVNode("Autres meubles sur mesure")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><ul class="footer__text__column" data-v-bb5cedf1><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cuisine-sur-mesure-savoie",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cuisine sur mesure`);
          } else {
            return [
              createTextVNode("Cuisine sur mesure")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dressings-sur-mesure-savoie",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dressings sur mesure`);
          } else {
            return [
              createTextVNode("Dressings sur mesure")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cave-a-vin-sur-mesure",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cave à vin sur mesure`);
          } else {
            return [
              createTextVNode("Cave à vin sur mesure")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/buanderie-sur-mesure-savoie",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Buanderie sur mesure`);
          } else {
            return [
              createTextVNode("Buanderie sur mesure")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/salle-de-bain-sur-mesure-savoie",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Salle de bain sur mesure`);
          } else {
            return [
              createTextVNode("Salle de bain sur mesure")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/salons-et-salles-a-manger-sur-mesure",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Salons et salles à manger`);
          } else {
            return [
              createTextVNode("Salons et salles à manger")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/meubles-entree-sur-mesure",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Meubles d&#39;entrée sur mesure`);
          } else {
            return [
              createTextVNode("Meubles d'entrée sur mesure")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><ul class="footer__text__column" data-v-bb5cedf1><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact-ebeniste-savoie#faq",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`F.A.Q.`);
          } else {
            return [
              createTextVNode("F.A.Q.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Accueil`);
          } else {
            return [
              createTextVNode("Accueil")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact-ebeniste-savoie",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact-ebeniste-savoie#partenaires",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Partenaires`);
          } else {
            return [
              createTextVNode("Partenaires")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/prestations-ebenisterie-savoie",
        class: "nuxt-link",
        style: { "opacity": "0.6", "pointer-events": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Prestations`);
          } else {
            return [
              createTextVNode("Prestations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/avant-apres-ebenisterie-savoie",
        class: "nuxt-link",
        style: { "opacity": "0.6", "pointer-events": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Avant-après`);
          } else {
            return [
              createTextVNode("Avant-après")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="footer__text__column__link" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://g.page/r/CZxa015iSh44EAE/review",
        target: "_blank",
        class: "nuxt-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Donner votre avis`);
          } else {
            return [
              createTextVNode("Donner votre avis")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="footer__bottom" data-v-bb5cedf1><span data-v-bb5cedf1>©J.P. Ebenisterie 2025</span><div class="icons" data-v-bb5cedf1><a href="facebook.com" aria-label="Facebook" target="_blank" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "facebook-logo-fill",
        color: unref(colors)["chocolate-martini"],
        size: "20px"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/jp.ebenisterie73?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" target="_blank" data-v-bb5cedf1>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "instagram-logo-fill",
        color: unref(colors)["chocolate-martini"],
        size: "20px"
      }, null, _parent));
      _push(`</a></div><span style="${ssrRenderStyle({ "opacity": "0.6", "pointer-events": "none" })}" data-v-bb5cedf1>Mentions légales</span><a href="https://tekilawebfactory.com" target="_blank" data-v-bb5cedf1>By Tekila Web Factory</a></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bb5cedf1"]]);
const _sfc_main$1 = {
  __name: "error",
  __ssrInlineRender: true,
  props: ["error"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderComponent = __nuxt_component_0;
      const _component_MobileHeader = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_PrimaryButton = __nuxt_component_3;
      const _component_FooterComponent = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderComponent, null, null, _parent));
      _push(ssrRenderComponent(_component_MobileHeader, null, null, _parent));
      _push(`<div class="error" data-v-64102a1b><div class="error__message" data-v-64102a1b><h1 class="titles" data-v-64102a1b>Oops... erreur ${ssrInterpolate(__props.error.statusCode)}</h1><h2 class="subtitles" data-v-64102a1b>Cette page n&#39;existe pas.</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "button-primary--dark",
        "aria-label": "retour à la page d'accueil"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PrimaryButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Retour à la page d&#39;accueil`);
                } else {
                  return [
                    createTextVNode("Retour à la page d'accueil")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PrimaryButton, null, {
                default: withCtx(() => [
                  createTextVNode("Retour à la page d'accueil")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_FooterComponent, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-64102a1b"]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { Ce as C, Pe as P, __nuxt_component_2$1 as _, _export_sfc as a, __nuxt_component_1$2 as b, colors as c, __nuxt_component_3 as d, entry$1 as default, useRoute as e, __nuxt_component_0 as f, __nuxt_component_1 as g, __nuxt_component_2 as h, onClickOutside as o, tryUseNuxtApp as t, useState as u };
//# sourceMappingURL=server.mjs.map
