<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import dayjs from "dayjs";
import { useVuelidate } from "@vuelidate/core";
import emailjs from "@emailjs/browser";
import { colors } from "@/utils/colors";

import {
  required,
  minLength,
  maxLength,
  email,
  minValue,
  maxValue,
} from "@vuelidate/validators";

const isSubmitting = ref(false);
const wasSent = ref(false);

const contactState = reactive({
  info: "",
  name: "",
  email: "",
  phoneNumber: "",
});

const templateParams = computed(() => ({
  name: contactState.name,
  email: contactState.email,
  phoneNumber: contactState.phoneNumber,
  info: contactState.info,
}));

function confirmSubmission() {
  isSubmitting.value = false;
  wasSent.value = true;
  vContact$.value.$reset();
  contactState.info = "";
  contactState.name = "";
  contactState.lastName = "";
  contactState.email = "";
  contactState.phoneNumber = "";

  setTimeout(() => {
    wasSent.value = false;
    emits("formSubmitted");
  }, 1400);
}

const phoneRegex =
  /^(\d{10}|(\d{2}[-.\s]){4}\d{2}|\(\d{3}\)\s\d{3}-\d{4}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\d{3}\s\d{3}\s\d{3}\s\d)$/;
const isPhoneNumber = (value) => phoneRegex.test(value);

const contactRules = {
  info: {},
  name: {
    required,
    maxLength: maxLength(30),
    minLength: minLength(2),
  },
  phoneNumber: {
    required,
    isPhoneNumber,
  },
  email: {
    required,
    email,
  },
};

const vContact$ = useVuelidate(contactRules, contactState);
const form = ref(null);

const nameErrors = computed(() => {
  const errors = [];
  if (!vContact$.value.name.$dirty) return errors;
  vContact$.value.name.required.$invalid &&
    errors.push("Please enter your first name");
  vContact$.value.name.minLength.$invalid &&
    errors.push("Your first name is too short (min 2 characters)");
  vContact$.value.name.maxLength.$invalid &&
    errors.push("Your first name is too long (max 30 characters)");

  return errors;
});

const phoneNumberErrors = computed(() => {
  const errors = [];
  if (!vContact$.value.phoneNumber.$dirty) return errors;
  vContact$.value.phoneNumber.required.$invalid &&
    errors.push("Please enter your phone number");
  vContact$.value.phoneNumber.isPhoneNumber.$invalid &&
    errors.push("Invalid phone number");

  return errors;
});

const emailErrors = computed(() => {
  const errors = [];
  if (!vContact$.value.email.$dirty) return errors;
  vContact$.value.email.required.$invalid &&
    errors.push("Please enter an email address");
  vContact$.value.email.email.$invalid &&
    errors.push("Please enter a valid email address");
  return errors;
});

async function submitForm() {
  alert("Form submitted");
  //   isSubmitting.value = true;
  //   await emailjs.send(
  //     "service_n1t6qo6",
  //     "template_764bqrq",
  //     templateParams.value,
  //     "8ifw_QPXgYXoWYmVW"
  //   );

  //   confirmSubmission();
}

async function validContactState() {
  const valid = await vContact$.value.$validate();

  if (valid) {
    submitForm();
  }
}
</script>
<template>
  <form class="form" ref="form" @submit.prevent="submit">
    <div class="form__fields">
      <div class="form__fields__field">
        <div class="textarea">
          <IconComponent
            icon="clipboard-text"
            size="1.5rem"
            :color="colors['chocolate-martini']"
          />
          <textarea
            v-model="contactState.info"
            id="info"
            label="Détails sur le projet"
            type="text"
            placeholder="Bonjour, je souhaite faire réaliser..."
            icon="clipboard-text"
            name="détails sur le projet"
            autocomplete="off"
          ></textarea>
        </div>
      </div>

      <div class="form__fields__field">
        <DropDown />
      </div>
    </div>
    <div class="form__fields">
      <div
        class="form__fields__field"
        :style="{
          boxShadow: nameErrors[0]
            ? `inset ${colors['error']} 0px 0px 0px 2px`
            : `inset ${colors['cannoli-cream']} 0px 0px 0px 2px`,
        }"
      >
        <InputField
          v-model="contactState.name"
          id="name"
          label="Nom"
          type="text"
          placeholder="Michel Dupont"
          icon="user"
          :error="nameErrors[0]"
          name="nom"
          autocomplete="on"
        />
      </div>
      <div
        class="form__fields__field"
        :style="{
          boxShadow: phoneNumberErrors[0]
            ? `inset ${colors['error']} 0px 0px 0px 2px`
            : `inset ${colors['cannoli-cream']} 0px 0px 0px 2px`,
        }"
      >
        <InputField
          v-model="contactState.phoneNumber"
          id="phoneNumber"
          label="Numéro de téléphone"
          type="text"
          placeholder="06 00 00 00 00"
          icon="phone"
          :error="phoneNumberErrors[0]"
          name="numéro de téléphone"
          autocomplete="on"
        />
      </div>
      <div
        class="form__fields__field"
        :style="{
          boxShadow: emailErrors[0]
            ? `inset ${colors['error']} 0px 0px 0px 2px`
            : `inset ${colors['cannoli-cream']} 0px 0px 0px 2px`,
        }"
      >
        <InputField
          v-model="contactState.email"
          id="email"
          label="Email"
          type="email"
          placeholder="michel.dupont@gmail.com"
          icon="envelope-1"
          :error="emailErrors[0]"
          name="email"
          autocomplete="on"
        />
      </div>
      <PrimaryButton :variant="'mocha-mousse'" @click="validContactState"
        >Demander une estimation</PrimaryButton
      >
    </div>
    <div
      class="errors"
      v-if="emailErrors[0] || phoneNumberErrors[0] || nameErrors[0]"
    >
      <span v-if="nameErrors[0]">{{ nameErrors[0] }}</span>
      <span v-if="phoneNumberErrors[0]">{{ phoneNumberErrors[0] }}</span>
      <span v-if="emailErrors[0]">{{ emailErrors[0] }}</span>
    </div>
  </form>
</template>
<style lang="scss" scoped>
.form {
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__fields {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: $radius;
    background-color: $base-color-darker;

    &__field {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
      justify-content: space-between;
      border-radius: $radius;
    }

    &:nth-of-type(2) {
      padding: 0;
      background-color: transparent;
    }
  }
}

.errors {
  color: $error-color;
  font-size: 0.75rem;
  font-weight: $regular;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
  }
}

.textarea {
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  background-color: $base-color;
  border-radius: $radius;
  padding: 0.65rem 0.75rem;
  height: 100px;

  & textarea {
    resize: none;
    font-size: 1rem;
    border: none;
    color: $text-color;
    width: 100% !important;
    overflow: hidden;

    &::placeholder {
      color: $text-color-faded;
      font-size: 1rem;
      font-weight: $regular;
      font-family: "Helvetica Text Now", sans-serif;
    }
  }
}
</style>
