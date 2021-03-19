<template lang="">
  <div>
    <form>
      <v-text-field
        v-model="phone"
        :error-messages="phoneErrors"
        :counter="10"
        label="Телефон"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="location"
        :error-messages="nameErrors"
        label="Населенный пункт"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Имя"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-textarea
        v-model="commentary"
        name="input-7-1"
        label="Комментарий"
        value=""
      ></v-textarea>

      <v-btn class="mr-4 order-button" @click="submit" primary>
        Отправить заказ
      </v-btn>
      <v-btn @click="clear" primary>
        Очистить
      </v-btn>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    phone: { required, maxLength: maxLength(10) },
    location: { required },
  },

  data: () => ({
    name: "",
    email: "",
    phone: "",
    location: "",
    commentary: "",
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push("Телефон не меньше 10 символов");
      !this.$v.name.required && errors.push("Заполните телефон.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      const obj = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        location: this.location,
        commentary: this.commentary,
      };
      this.$emit("submit", obj);
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.phone = "";
      this.location = "";
      this.commentary = "";
    },
  },
};
</script>

<style lang="scss" scope>
.order-button {
  width: 224px;
  color: #fff !important;
  font-size: 13px;
  background-color: #2796ff !important;
  box-shadow: 0 2px 8px 0 rgb(39 150 255 / 60%);
}
</style>
