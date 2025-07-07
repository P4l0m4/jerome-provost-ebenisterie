import { b as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_0 } from './Breadcrumbs-D6kMZRbn.mjs';
import { c as __nuxt_component_4$1, b as __nuxt_component_4$2, _ as __nuxt_component_2$2, a as __nuxt_component_3$2 } from './InfoBanner-CX02p6Qp.mjs';
import { a as _export_sfc, c as colors, _ as __nuxt_component_2$1, d as __nuxt_component_3$3, b as __nuxt_component_1$2, o as onClickOutside } from './server.mjs';
import { defineComponent, unref, withCtx, createTextVNode, ref, reactive, computed, mergeProps, createBlock, createCommentVNode, openBlock, createVNode, Fragment, renderList, toDisplayString, mergeModels, useModel, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderDynamicModel, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import { useVuelidate } from '@vuelidate/core';
import emailjs from '@emailjs/browser';
import { minLength, maxLength, minValue, email, required } from '@vuelidate/validators';
import { a as useHead$1, u as useJsonld } from './composable-X-G9GS9J.mjs';
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

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "RangeInput",
  __ssrInlineRender: true,
  emits: ["range"],
  setup(__props, { emit: __emit }) {
    const value = ref(1e4);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "range-input" }, _attrs))} data-v-305691b2><div class="range-input__header" data-v-305691b2><div class="range-input__header__label" data-v-305691b2>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "coins",
        size: "2rem"
      }, null, _parent));
      _push(`<span data-v-305691b2>Budget</span></div><div class="range-input__header__value" data-v-305691b2>${ssrInterpolate(new Intl.NumberFormat("fr-FR").format(value.value))} \u20AC<br data-v-305691b2><small data-v-305691b2>max./unit\xE9</small></div></div><input class="range-input__slider" type="range" min="100" max="20000" step="100"${ssrRenderAttr("value", value.value)} data-v-305691b2></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RangeInput.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-305691b2"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "InputField",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: {},
    label: {},
    placeholder: {},
    type: { default: "text" },
    icon: {},
    required: { type: Boolean, default: true },
    autofocus: { type: Boolean, default: false },
    error: {},
    name: {},
    autocomplete: { default: "on" }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "input-field" }, _attrs))} data-v-afbb4d95><label class="input-field__label sr-only"${ssrRenderAttr("for", _ctx.id)} data-v-afbb4d95>${ssrInterpolate(_ctx.label)}</label>`);
      if (_ctx.icon) {
        _push(ssrRenderComponent(_component_IconComponent, {
          icon: _ctx.icon,
          size: "1.5rem",
          color: unref(colors)["chocolate-martini"]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderDynamicModel(_ctx.type, model.value, model.value)}${ssrRenderAttr("id", _ctx.id)} class="${ssrRenderClass([{ "input-field__input--error": _ctx.error }, "input-field__input"])}"${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderAttr("autocomplete", _ctx.autocomplete)}${ssrIncludeBooleanAttr(_ctx.autofocus) ? " autofocus" : ""}${ssrRenderAttr("aria-label", _ctx.label)}${ssrRenderAttr("aria-labelledby", _ctx.label)}${ssrRenderAttr("title", _ctx.label)}${ssrRenderAttr("aria-placeholder", _ctx.placeholder)}${ssrRenderAttr("name", _ctx.name)}${ssrRenderAttr("value", model.value)} data-v-afbb4d95></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InputField.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-afbb4d95"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DropDown",
  __ssrInlineRender: true,
  props: {
    errors: String
  },
  emits: ["optionSelected"],
  setup(__props, { emit: __emit }) {
    const target = ref();
    const options = ref([
      "Cuisine",
      "Dressing",
      "Meuble de salle de bain",
      "Biblioth\xE8que",
      "Table et table basse",
      "Bureau",
      "Armoire",
      "Meuble TV",
      "Autre"
    ]);
    onClickOutside(target, () => {
      isDropdownOpen.value = false;
    });
    const optionSelected = ref("");
    const isDropdownOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "dropdown",
        ref_key: "target",
        ref: target
      }, _attrs))} data-v-a261bec1><span class="dropdown__selected" style="${ssrRenderStyle({
        borderLeft: __props.errors ? `4px solid ${unref(colors)["error"]}` : `0px solid transparent`
      })}" data-v-a261bec1>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "rows",
        size: "1.5rem",
        color: unref(colors)["chocolate-martini"]
      }, null, _parent));
      _push(` ${ssrInterpolate(optionSelected.value.length > 0 ? optionSelected.value : "Type de meuble")} <span style="${ssrRenderStyle({ "opacity": "0.6", "margin-left": "auto" })}" data-v-a261bec1>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: isDropdownOpen.value ? "caret_up_bold" : "caret_down_bold",
        size: "1.5rem",
        color: "currentColor"
      }, null, _parent));
      _push(`</span></span>`);
      if (isDropdownOpen.value) {
        _push(`<div class="dropdown__content" data-v-a261bec1><!--[-->`);
        ssrRenderList(options.value, (option) => {
          _push(`<span class="dropdown__content__option" style="${ssrRenderStyle({
            opacity: optionSelected.value === option ? 0.6 : 1,
            backgroundColor: optionSelected.value === option ? unref(colors)["cannoli-cream-darker"] : ""
          })}" data-v-a261bec1>${ssrInterpolate(option)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropDown.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a261bec1"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pop-up" }, _attrs))} data-v-1c6d62a1><span class="pop-up__message" data-v-1c6d62a1>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopUp.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1c6d62a1"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FormComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const isSubmitting = ref(false);
    const wasSent = ref(false);
    const contactState = reactive({
      info: "",
      budget: "",
      name: "",
      email: "",
      furnitureType: "",
      phoneNumber: ""
    });
    const templateParams = computed(() => ({
      name: contactState.name,
      email: contactState.email,
      phoneNumber: contactState.phoneNumber,
      info: contactState.info,
      furnitureType: contactState.furnitureType,
      budget: contactState.budget
    }));
    function confirmSubmission() {
      isSubmitting.value = false;
      wasSent.value = true;
      vContact$.value.$reset();
      contactState.info = "";
      contactState.name = "";
      contactState.furnitureType = "";
      contactState.email = "";
      contactState.phoneNumber = "";
      contactState.budget = "";
      setTimeout(() => {
        wasSent.value = false;
      }, 1400);
    }
    const phoneRegex = /^(\d{10}|(\d{2}[-.\s]){4}\d{2}|\(\d{3}\)\s\d{3}-\d{4}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\d{3}\s\d{3}\s\d{3}\s\d)$/;
    const isPhoneNumber = (value) => phoneRegex.test(value);
    const contactRules = {
      furnitureType: {
        required
      },
      info: {},
      budget: { required, minValue: minValue(100) },
      name: {
        required,
        maxLength: maxLength(30),
        minLength: minLength(2)
      },
      phoneNumber: {
        required,
        isPhoneNumber
      },
      email: {
        required,
        email
      }
    };
    function setFurnitureType(type) {
      contactState.furnitureType = type;
    }
    function setBudget(value) {
      contactState.budget = value.toString();
    }
    const vContact$ = useVuelidate(contactRules, contactState);
    const form = ref(null);
    const nameErrors = computed(() => {
      const errors = [];
      if (!vContact$.value.name.$dirty) return errors;
      vContact$.value.name.required.$invalid && errors.push("Ajoutez un pr\xE9nom");
      vContact$.value.name.minLength.$invalid && errors.push("Votre pr\xE9nom est trop court (min 2 caract\xE8res)");
      vContact$.value.name.maxLength.$invalid && errors.push("Votre pr\xE9nom est trop long (max 30 caract\xE8res)");
      return errors;
    });
    const phoneNumberErrors = computed(() => {
      const errors = [];
      if (!vContact$.value.phoneNumber.$dirty) return errors;
      vContact$.value.phoneNumber.required.$invalid && errors.push("Ajoutez un num\xE9ro de t\xE9l\xE9phone");
      vContact$.value.phoneNumber.isPhoneNumber.$invalid && errors.push("Num\xE9ro de t\xE9l\xE9phone invalide");
      return errors;
    });
    const emailErrors = computed(() => {
      const errors = [];
      if (!vContact$.value.email.$dirty) return errors;
      vContact$.value.email.required.$invalid && errors.push("Ajoutez une adresse email");
      vContact$.value.email.email.$invalid && errors.push("Adresse email invalide");
      return errors;
    });
    const furnitureTypeErrors = computed(() => {
      const errors = [];
      if (!vContact$.value.furnitureType.$dirty) return errors;
      vContact$.value.furnitureType.required.$invalid && errors.push("Choisissez un type de meuble");
      return errors;
    });
    const budgetErrors = computed(() => {
      const errors = [];
      if (!vContact$.value.budget.$dirty) return errors;
      vContact$.value.budget.required.$invalid && errors.push("Choisissez un budget");
      vContact$.value.budget.minValue.$invalid && errors.push("Budget minimum: 100\u20AC");
      return errors;
    });
    async function submitForm() {
      isSubmitting.value = true;
      await emailjs.send(
        "service_xeu1q0c",
        "template_va1qkos",
        templateParams.value,
        "_605G7abZ70S1RQr3"
      );
      confirmSubmission();
    }
    async function validContactState() {
      const valid = await vContact$.value.$validate();
      if (valid) {
        submitForm();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconComponent = __nuxt_component_2$1;
      const _component_RangeInput = __nuxt_component_1;
      const _component_InputField = __nuxt_component_2;
      const _component_DropDown = __nuxt_component_3$1;
      const _component_PrimaryButton = __nuxt_component_3$3;
      const _component_PopUp = __nuxt_component_5$1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "form",
        ref_key: "form",
        ref: form
      }, _attrs))} data-v-85bd8427><div class="form__fields" data-v-85bd8427><div class="form__fields__field" data-v-85bd8427><div class="textarea" data-v-85bd8427>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "clipboard-text",
        size: "1.5rem",
        color: unref(colors)["chocolate-martini"]
      }, null, _parent));
      _push(`<textarea id="info" label="D\xE9tails sur le projet" type="text" placeholder="Bonjour, je souhaite faire r\xE9aliser..." icon="clipboard-text" name="d\xE9tails sur le projet" autocomplete="off" autofocus data-v-85bd8427>${ssrInterpolate(contactState.info)}</textarea></div></div><div class="form__fields__field" style="${ssrRenderStyle({
        borderLeft: unref(budgetErrors)[0] ? `4px solid ${unref(colors)["error"]}` : `0px solid transparent`
      })}" data-v-85bd8427>`);
      _push(ssrRenderComponent(_component_RangeInput, { onRange: setBudget }, null, _parent));
      _push(`</div></div><div class="form__fields" data-v-85bd8427><div class="form__fields__field" style="${ssrRenderStyle({
        borderLeft: unref(nameErrors)[0] ? `4px solid ${unref(colors)["error"]}` : `0px solid transparent`
      })}" data-v-85bd8427>`);
      _push(ssrRenderComponent(_component_InputField, {
        modelValue: contactState.name,
        "onUpdate:modelValue": ($event) => contactState.name = $event,
        id: "name",
        label: "Nom",
        type: "text",
        placeholder: "Michel Dupont",
        icon: "user",
        error: unref(nameErrors)[0],
        name: "nom",
        autocomplete: "on"
      }, null, _parent));
      _push(`</div><div class="form__fields__field" style="${ssrRenderStyle({
        borderLeft: unref(phoneNumberErrors)[0] ? `4px solid ${unref(colors)["error"]}` : `0px solid transparent`
      })}" data-v-85bd8427>`);
      _push(ssrRenderComponent(_component_InputField, {
        modelValue: contactState.phoneNumber,
        "onUpdate:modelValue": ($event) => contactState.phoneNumber = $event,
        id: "phoneNumber",
        label: "Num\xE9ro de t\xE9l\xE9phone",
        type: "text",
        placeholder: "06 00 00 00 00",
        icon: "phone",
        error: unref(phoneNumberErrors)[0],
        name: "num\xE9ro de t\xE9l\xE9phone",
        autocomplete: "on"
      }, null, _parent));
      _push(`</div><div class="form__fields__field" style="${ssrRenderStyle({
        borderLeft: unref(emailErrors)[0] ? `4px solid ${unref(colors)["error"]}` : `0px solid transparent`
      })}" data-v-85bd8427>`);
      _push(ssrRenderComponent(_component_InputField, {
        modelValue: contactState.email,
        "onUpdate:modelValue": ($event) => contactState.email = $event,
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "michel.dupont@gmail.com",
        icon: "envelope-1",
        error: unref(emailErrors)[0],
        name: "email",
        autocomplete: "on"
      }, null, _parent));
      _push(`</div><div class="form__fields__field" data-v-85bd8427>`);
      _push(ssrRenderComponent(_component_DropDown, {
        onOptionSelected: setFurnitureType,
        errors: unref(furnitureTypeErrors)[0]
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PrimaryButton, {
        variant: "mocha-mousse",
        onClick: validContactState
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isSubmitting.value) {
              _push2(`<span class="spin" data-v-85bd8427${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconComponent, {
                icon: "\n           circle-notch\n          ",
                size: "1.25rem"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`Demander une estimation `);
          } else {
            return [
              isSubmitting.value ? (openBlock(), createBlock("span", {
                key: 0,
                class: "spin"
              }, [
                createVNode(_component_IconComponent, {
                  icon: "\n           circle-notch\n          ",
                  size: "1.25rem"
                })
              ])) : createCommentVNode("", true),
              createTextVNode("Demander une estimation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (wasSent.value) {
        _push(ssrRenderComponent(_component_PopUp, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Merci, votre demande a \xE9t\xE9 envoy\xE9e !`);
            } else {
              return [
                createTextVNode("Merci, votre demande a \xE9t\xE9 envoy\xE9e !")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "1rem", "color": "white" })}" data-v-85bd8427></div></div>`);
      if (unref(emailErrors)[0] || unref(phoneNumberErrors)[0] || unref(nameErrors)[0] || unref(furnitureTypeErrors)[0] || unref(budgetErrors)[0]) {
        _push(`<div class="errors" data-v-85bd8427>`);
        if (unref(nameErrors)[0]) {
          _push(`<span data-v-85bd8427>${ssrInterpolate(unref(nameErrors)[0])}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(phoneNumberErrors)[0]) {
          _push(`<span data-v-85bd8427>${ssrInterpolate(unref(phoneNumberErrors)[0])}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(emailErrors)[0]) {
          _push(`<span data-v-85bd8427>${ssrInterpolate(unref(emailErrors)[0])}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(furnitureTypeErrors)[0]) {
          _push(`<span data-v-85bd8427>${ssrInterpolate(unref(furnitureTypeErrors)[0])}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(budgetErrors)[0]) {
          _push(`<span data-v-85bd8427>${ssrInterpolate(unref(budgetErrors)[0])}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-85bd8427"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PartnersCard",
  __ssrInlineRender: true,
  props: {
    partners: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$2;
      _push(`<!--[-->`);
      ssrRenderList(_ctx.partners, (partner) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "partners-card",
          to: partner.link,
          key: partner.name,
          style: { backgroundImage: `url(${partner.imagePath})` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="partners-card__logo" style="${ssrRenderStyle({
                backgroundImage: `url(${partner.logoPath})`,
                backgroundColor: partner.color ? partner.color : unref(colors)["lucent-white"]
              })}" data-v-d4391038${_scopeId}></span><div class="partners-card__tags" data-v-d4391038${_scopeId}><!--[-->`);
              ssrRenderList(partner.tags, (tag) => {
                _push2(`<span class="partners-card__tags__tag" data-v-d4391038${_scopeId}>${ssrInterpolate(tag)}</span>`);
              });
              _push2(`<!--]--></div><span class="partners-card__name" data-v-d4391038${_scopeId}>${ssrInterpolate(partner.name)}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "partners-card__logo",
                  style: {
                    backgroundImage: `url(${partner.logoPath})`,
                    backgroundColor: partner.color ? partner.color : unref(colors)["lucent-white"]
                  }
                }, null, 4),
                createVNode("div", { class: "partners-card__tags" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(partner.tags, (tag) => {
                    return openBlock(), createBlock("span", { class: "partners-card__tags__tag" }, toDisplayString(tag), 1);
                  }), 256))
                ]),
                createVNode("span", { class: "partners-card__name" }, toDisplayString(partner.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PartnersCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d4391038"]]);
function isMobile() {
  return (void 0).innerWidth < 1108;
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "KnowHow",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SideText = __nuxt_component_4$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "know-how" }, _attrs))} data-v-6506a176>`);
      if (!unref(isMobile)()) {
        _push(ssrRenderComponent(_component_SideText, { side: "left" }, {
          subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Compl\xE9mentaires`);
            } else {
              return [
                createTextVNode("Compl\xE9mentaires")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Savoir-faire `);
            } else {
              return [
                createTextVNode(" Savoir-faire ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_SideText, {
          side: "top",
          style: { "height": "fit-content" }
        }, {
          subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Compl\xE9mentaires`);
            } else {
              return [
                createTextVNode("Compl\xE9mentaires")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Savoir-faire `);
            } else {
              return [
                createTextVNode(" Savoir-faire ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`<div class="know-how__bubbles" data-v-6506a176><div class="know-how__bubbles__bubble" data-v-6506a176><span data-v-6506a176>Sculpture</span></div><div class="know-how__bubbles__bubble" data-v-6506a176><span data-v-6506a176>M\xE9tallurgie</span></div><div class="know-how__bubbles__bubble" data-v-6506a176><span data-v-6506a176>Tapisserie</span></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/KnowHow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6506a176"]]);
const _sfc_main$1 = {
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const faq = [
      {
        title: "Quels sont les avantages des meubles sur mesure ?",
        answer: "Les meubles sur mesure s\u2019int\xE8grent parfaitement a votre espace et r\xE9pondent au mieux \xE0 vos attentes en termes de design et de qualit\xE9."
      },
      {
        title: "Pourquoi choisir un \xE9b\xE9niste agen\xE7eur ?",
        answer: "En tant qu'Eb\xE9niste, je poss\xE8de une minutie et une cr\xE9ativit\xE9 accrues ainsi que des comp\xE9tences compl\xE9mentaires (sculpture, marqueterie, etc). Je maitrise \xE9galement des outils de productions tr\xE8s sp\xE9cifiques et vari\xE9s et saurait m\xEAme imaginer les m\xE9thodologies de production utiles pour des projets hors norme."
      },
      {
        title: "Comment se d\xE9roule la r\xE9alisation d\u2019un meuble sur mesure ?",
        answer: "Tout commence par un \xE9change de vive voix. Pendant cet \xE9change, je r\xE9alise des croquis \xE0 main lev\xE9e, prends des dimensions et tente de cerner au mieux la vision du client. Je m\u2019at\xE8le ensuite a dessiner et \xE0 chiffrer le projet. Si le client valide le devis, je repasse pour une prise de cote pr\xE9cise avant la r\xE9alisation en atelier. Vient ensuite la livraison, toujours dans les d\xE9lais indiqu\xE9 sur le devis. Une fois la pose termin\xE9e, si le client est satisfait, je lui transmet une facture."
      },
      {
        title: "Quels sont vos d\xE9lais de r\xE9alisation ?",
        answer: "Je mets un point d\u2019honneur \xE0 vous d\xE9livrer un devis le plus rapidement possible, soit une semaine environ, quinze jours si n\xE9cessaires ( dans le cas d\u2019un accroissement de travail, ou d\u2019un devis n\xE9cessitant plus de temps). Pour ce qui est des r\xE9alisations, j\u2019essaie de vous livrer vos am\xE9nagements sous 4 \xE0 6 mois."
      },
      {
        title: "Comment obtenir un devis pour un meuble sur mesure ?",
        answer: "Rien de plus simple, me contacter\xA0par t\xE9l\xE9phone au 06 23 04 16 37, ou par mail \xE0 l\u2019adresse jp.ebenisterie73@gmail.com. Vous pouvez \xE9galement faire une demande devis directement sur le site depuis le formulaire de contact."
      },
      {
        title: "Quelles sont vos garanties et conditions apr\xE8s-vente ?",
        answer: "Ma meilleure publicit\xE9 \xE9tant le bouche \xE0 oreille, je m\u2019efforce de vous satisfaire. Je fais donc toujours en sorte que le produit que je vous vends corresponde \xE0 vos attentes. Si besoin, j\u2019interviens sans soucis \xE0 la suite des travaux pour affiner votre demande."
      },
      {
        title: "Quels sont vos tarifs pour un projet sur mesure ?",
        answer: "Il est certain que les meubles sur mesure ont un co\xFBt. Tout comme mes outils de production, les mat\xE9riaux de qualit\xE9, mes comp\xE9tences et mon temps. Je m\u2019engage, pour autant, \xE0 toujours essayer de vous proposer le meilleur tarif relatif \xE0 votre projet. Chaque projet \xE9tant unique, je vous invite \xE0 me contacter pour un devis personnalis\xE9."
      }
    ];
    const questions = faq.map((question) => {
      return {
        "@type": "Question",
        name: question.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: question.answer
        }
      };
    });
    useJsonld(() => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [questions]
    }));
    const questionOpened = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconComponent = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "faq"
      }, _attrs))} data-v-24fc9ef2><span class="faq__title" data-v-24fc9ef2>Foire aux questions</span><div class="faq__cards" data-v-24fc9ef2><!--[-->`);
      ssrRenderList(faq, (question, index) => {
        _push(`<div class="faq__cards__card" data-v-24fc9ef2><h2 class="faq__cards__card__question" data-v-24fc9ef2><span class="icon" data-v-24fc9ef2>`);
        _push(ssrRenderComponent(_component_IconComponent, {
          icon: unref(questionOpened) === index ? "xx" : "plus",
          size: "1rem",
          color: unref(colors)["lucent-white"]
        }, null, _parent));
        _push(`</span> ${ssrInterpolate(question.title)}</h2>`);
        if (unref(questionOpened) === index) {
          _push(`<p class="faq__cards__card__answer" data-v-24fc9ef2>${ssrInterpolate(question.answer)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQ.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-24fc9ef2"]]);
const _imports_0 = "" + buildAssetsURL("jp-banner.DoA7iJAJ.webp");
const _imports_1 = "" + buildAssetsURL("jp-banner-tablet.BuVLKbXD.webp");
const _imports_2 = "" + buildAssetsURL("jp-banner-mobile.Dmc3UghA.webp");
const marbre = "" + buildAssetsURL("marbre.BHz_xG4Z.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact-ebeniste-savoie",
  __ssrInlineRender: true,
  setup(__props) {
    useHead$1({
      title: "Trouver un Ebeniste autour de moi | Obtenir un devis | JP Eb\xE9nisterie",
      meta: [
        {
          name: "description",
          content: "Obtenez un devis pour votre meuble sur mesure. J\xE9r\xF4me Provost Eb\xE9nisterie, \xE9b\xE9niste agenceur \xE0 Chamb\xE9ry en Savoie, r\xE9alise tous vos projets de meubles sur mesure."
        }
      ]
    });
    const breadcrumbs = [
      {
        name: "Accueil",
        url: "/"
      },
      {
        name: "Contact",
        url: "/contact-ebeniste-savoie"
      }
    ];
    const partners = [
      {
        name: "Marbrerie Portalier",
        link: "https://marbrerieportalier.com/",
        logoPath: "https://marbrerieportalier.com/wp-content/uploads/2024/10/marbrerie-portalier150.png",
        tags: ["Marbre"],
        imagePath: marbre
      },
      {
        name: "Atelier d\u2019Essence Agencement",
        link: "https://www.atelierdessence.com/",
        logoPath: "https://le-cdn.website-editor.net/s/0b2880bf24384c258a443836b12c9101/dms3rep/multi/opt/ATELIER-ESSENCE-Logo-460c93b7-339w.png?Expires=1746849606&Signature=l9OF0283QgkAULO9I6QQyYxd8u0XSdBUiD6weUjO-dfxJW6GAKBRlSr1F3Aa0QEpLrsuvndh8w4VzFNWw1BWcGIlX83PGlsN6VobHgHjeDrmQBPiOAOLk9SzQJUZ3Gv0q3KBQGqbULcFTkMXf5Sm8vqepCvvWJe6PUXC1XOJwKowswZsd86CDl0PswO-srORRbZwgOFnWLlXIw~8oTsZ1HxVh2UXWFglUV-pDWm~r62JrIjCdELH16gLbjWA3U-rtRTL8geBt6tUfjLym-KfVCBPFpfnGfjbQl9FGXOsZPw-41nyOqEOm1PUiyc5GslYG~LZ4r0Iqek7ObKv4aRlYA__&Key-Pair-Id=K2NXBXLF010TJW",
        tags: ["Eb\xE9nisterie", "Agencement"],
        imagePath: "https://le-cdn.website-editor.net/s/0b2880bf24384c258a443836b12c9101/dms3rep/multi/opt/IMG_0082-1920w.jpg?Expires=1747057275&Signature=XoVkDSodmZjXVbKDGtBKVF2Mids9R42dlBeq21HIPBdlffWwrLOHuBXx8VbFNepg6~MUJ2Ff90gHe0cugEEyTtrR6uT7zl~B08N4KiEyobC5kLpiPFOj3AF5Bvn1t6z7i9LPrK8bvc719A6yvEnrBFrsdBkcL9APCHwPtbtFb5vabkBE1Gae15uTtRzcDOQy5pVc0ZDWFhWIzErKsyxSDVp9dS9hSdHGSyH81F7tzi0uG33TOabv7Cg12fFT~VWFXZAlizi2wysDTwvU8NJTJMYTXqJBnDUaqR5wm4tBz2ZCzpMif3lgnkIYsjsNdEcudA8nQXHqx7ilOPLHwboyWQ__&Key-Pair-Id=K2NXBXLF010TJW"
      },
      {
        name: "CLS Chape Liquide Savoie",
        link: "https://chapeliquidesavoie.wixsite.com/info",
        logoPath: "https://static.wixstatic.com/media/c35561_4c15ee81e4124eb88e018e7c52ee9569~mv2_d_5294_1405_s_2.png/v1/fill/w_390,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c35561_4c15ee81e4124eb88e018e7c52ee9569~mv2_d_5294_1405_s_2.png",
        tags: ["chape liquide"],
        imagePath: "https://lh3.googleusercontent.com/p/AF1QipMY46M7nPQiKoonF7pNFufi8aKj9fsPpnnSAIA6=s1360-w1360-h1020"
      },
      {
        name: "Erick Charquet",
        link: "https://www.erickcharquet.com/",
        logoPath: "https://www.erickcharquet.com/sites/3744cw1021/files/logo.png",
        tags: ["Ferronnerie d\u2019art"],
        imagePath: "https://www.erickcharquet.com/sites/3744cw1021/files/galeries/marquise-tonnelle-bourget-du-lac-erick-charquet-ferronnerie-dart-4.jpg",
        color: colors["nebulosity"]
      },
      {
        name: "Nau Courtier Conseil",
        link: "https://www.naucourtierconseil.fr/",
        logoPath: "data:image/png;base64,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",
        tags: ["Courtier"],
        imagePath: "https://www.naucourtierconseil.fr/landing_assurance_huac86d262d92e7fe7003783ca7f817762_836153_1200x0_resize_q75_box.jpg"
      },
      {
        name: "Eric Doro, Pathey architectes",
        link: "https://www.patey.fr/",
        logoPath: "https://www.patey.fr/wp-content/uploads/2023/01/cropped-patey-architectes-chambery.png",
        tags: ["Architecte"],
        imagePath: "https://www.patey.fr/wp-content/uploads/cache/2021/04/059-scaled/1314006747.jpg"
      },
      {
        name: "ASM serrurerie m\xE9tallerie",
        link: "https://asm-chambery.com/",
        logoPath: "https://asm-chambery.com/wp-content/uploads/2017/06/V2-ASM-LOGO-900x210.png",
        tags: ["Serrurerie", "M\xE9tallerie"],
        imagePath: "http://asm-chambery.com/wp-content/uploads/2017/06/IMG_3126.jpg"
      },
      {
        name: "Hugo Reymond, LA\u2019HO Architectes",
        link: "https://fr.linkedin.com/in/la-ho-architectes-hugo-reymond-23822a205",
        logoPath: "https://media.licdn.com/dms/image/v2/C4D03AQHgbPlC_BeNUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1641456010385?e=1750291200&v=beta&t=xNaWWaFnKms8wW1aLlEM-HmP9u33xfiXfQ3mNjmHxfk",
        tags: ["Architecte"],
        imagePath: "https://media.licdn.com/dms/image/v2/C4E22AQG9HtiQ4z_DRQ/feedshare-shrink_800/feedshare-shrink_800/0/1659273622138?e=2147483647&v=beta&t=jeS3GmRAqWV4hj3OYbCvlccM1UOIKWb8TUaLie1OJmg"
      },
      {
        name: "Etablissements Riera",
        link: "https://g.co/kgs/4VNWfWk",
        logoPath: "",
        tags: ["Peintre en b\xE2timent"],
        imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRep59uxVzjGpUbSVlfGNO1wrrF7zH5NyEQaUTYCsZ7erFZOiQCQTf7QcdY-mExGcJHTw&usqp=CAU"
      },
      {
        name: "Mahmoud Achouri",
        link: "https://g.co/kgs/DeDwhmZ",
        logoPath: "",
        tags: ["Couvreur charpentier"],
        imagePath: "https://toiture.pro/lexique/dictionnaire-lexique.jpg"
      },
      {
        name: "B2Ms Int\xE9rieurs",
        link: "https://g.co/kgs/VefSkjY",
        logoPath: "",
        tags: ["Placo", "Second \u0153uvre", "Coordination", "Bin\xF4me"],
        imagePath: "https://www.megastructures.fr/wp-content/uploads/2020/10/second-oeuvre.jpg"
      },
      {
        name: "Alpes Savoie Electricit\xE9",
        link: "https://www.facebook.com/profile.php?id=61573522184020&amp;locale=fr_FR",
        logoPath: "",
        tags: ["Electricit\xE9"],
        imagePath: "https://f.maformation.fr/edito/sites/3/2021/11/apprendre-electricite.jpeg"
      },
      {
        name: "C2E courant eau electricit\xE9",
        link: "https://www.meilleur-artisan.com/entreprise.courant-eau-electricite-c2e.890666.html",
        logoPath: "",
        tags: ["Installation", "Electricit\xE9", "Gaz", "Eau"],
        imagePath: "https://cdn.hellowatt.fr/media/solution/images/intro_installation_chauffe-eau_gaz.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JsonldBreadcrumbs = __nuxt_component_0;
      const _component_SideText = __nuxt_component_4$1;
      const _component_IconComponent = __nuxt_component_2$1;
      const _component_FormComponent = __nuxt_component_3;
      const _component_PartnersCard = __nuxt_component_4;
      const _component_KnowHow = __nuxt_component_5;
      const _component_InfoBanner = __nuxt_component_4$2;
      const _component_FAQ = __nuxt_component_7;
      const _component_ProvostTitle = __nuxt_component_2$2;
      const _component_CarouselComponent = __nuxt_component_3$2;
      _push(`<!--[--><picture class="contact-banner" data-v-1d715c5f><source media="(min-width: 1100px)"${ssrRenderAttr("srcset", _imports_0)} type="image/webp" data-v-1d715c5f><source media="(min-width: 780px)"${ssrRenderAttr("srcset", _imports_1)} type="image/webp" data-v-1d715c5f>`);
      _push(ssrRenderComponent(_component_JsonldBreadcrumbs, {
        links: breadcrumbs,
        color: unref(colors)["cannoli-cream-darker"],
        class: "breadcrumbs"
      }, null, _parent));
      _push(`<div class="contact-banner__txt" data-v-1d715c5f>`);
      _push(ssrRenderComponent(_component_SideText, {
        variant: "light",
        side: "top"
      }, {
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Eb\xE9niste agenceur en Savoie`);
          } else {
            return [
              createTextVNode("Eb\xE9niste agenceur en Savoie")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` J\xE9r\xF4me Provost `);
          } else {
            return [
              createTextVNode(" J\xE9r\xF4me Provost ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="contact-banner__txt__info" data-v-1d715c5f><a class="contact-banner__txt__info__element" href="tel:0623041637" data-v-1d715c5f>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "phone",
        size: "2rem",
        color: unref(colors)["lucent-white"]
      }, null, _parent));
      _push(`06 23 04 16 37 </a><a class="contact-banner__txt__info__element" href="mailto:jp.ebenisterie73@gmail.com" data-v-1d715c5f>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "envelope-1",
        size: "2rem",
        color: unref(colors)["lucent-white"]
      }, null, _parent));
      _push(`jp.ebenisterie73@gmail.com </a></div></div>`);
      _push(ssrRenderComponent(_component_FormComponent, null, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_2)} alt="contact ebenisterie chambery" data-v-1d715c5f></picture><section id="partenaires" class="partners" data-v-1d715c5f>`);
      _push(ssrRenderComponent(_component_SideText, {
        variant: "light",
        side: "top"
      }, {
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tous les fournisseurs et partenaires`);
          } else {
            return [
              createTextVNode("Tous les fournisseurs et partenaires")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Partenaires `);
          } else {
            return [
              createTextVNode(" Partenaires ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid" data-v-1d715c5f>`);
      _push(ssrRenderComponent(_component_PartnersCard, { partners }, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_KnowHow, null, null, _parent));
      _push(ssrRenderComponent(_component_InfoBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_FAQ, null, null, _parent));
      _push(ssrRenderComponent(_component_ProvostTitle, null, null, _parent));
      _push(ssrRenderComponent(_component_CarouselComponent, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-ebeniste-savoie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactEbenisteSavoie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d715c5f"]]);

export { contactEbenisteSavoie as default };
//# sourceMappingURL=contact-ebeniste-savoie-CjU6CcFN.mjs.map
