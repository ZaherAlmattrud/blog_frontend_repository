<template>
  <authentication-layout>
    <v-form>
      <v-container class="mt-8 loginForm">
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="4">
            <label class="brown--text"> تسجيل حساب جديد </label>
          </v-col></v-row
        >
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.name"
              :prepend-inner-icon="mdiLockOutline"
              label="اسم المستخدم"
              required
              outlined
              autocomplete="new-password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4" align="center">
            <v-text-field
              v-model="user.email"
              :prepend-inner-icon="mdiEmailOutline"
              type="email"
              label="البريد الالكتروني"
              outlined
              required
              autocomplete="new-password"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.password"
              :prepend-inner-icon="mdiLockOutline"
              label="كلمة المرور"
              type="password"
              outlined
              required
              autocomplete="new-password"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.password_confirmation"
              :prepend-inner-icon="mdiLockOutline"
              label="تأكيد كلمة المرور"
              type="password"
              required
              autocomplete="new-password"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-btn depressed color="success" @click="register">
              تســـــــــــــــــــــــــــــــــــــــــــــجيل
            </v-btn>

            <v-btn depressed color="error" class="mr-5" @click="clear">
             الغاء الأمر
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-row >
        <v-dialog v-model="dialog" persistent min-width="600px" min-hight="500px">
           <v-container fill-height fluid >
        <v-row align="center" justify="center" class="text-center">
          <v-col md="8" class="white--text">تم أنشاء حساب جديد بنجاح</v-col>
        </v-row>
      </v-container >
        </v-dialog>
      </v-row>
    </v-form>
  </authentication-layout>
</template>

<script>
import AuthenticationLayout from "../../layouts/AuthenticationLayout.vue";
import { mdiLockOutline } from '@mdi/js';
import { mdiEmailOutline } from '@mdi/js';

export default {
  name: "register",

  data() {
    return {
      dialog: false,
      mdiLockOutline:mdiLockOutline,
      mdiEmailOutline:mdiEmailOutline,
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },

  components: {
    AuthenticationLayout,
  },
  methods: {
    register: function () {
      this.$store.dispatch("auth/register", this.user);

      this.dialog = true;
    },

    clear: function () {
      this.user.name = "";

      this.user.email = "";

      this.user.password = "";

      this.user.password_confirmation = "";
    },
  },
};
</script>