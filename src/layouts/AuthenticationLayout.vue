<template>
  <v-app>
    <v-app-bar app color="#A1887F">

      <v-container fill-height fluid >
        <v-row align="center" justify="center" class="text-center">
          <v-col md="4" class="white--text"> مرحبا بكم في مدونتي </v-col>
        </v-row>
      </v-container >

    </v-app-bar>

    <v-content>
      <slot></slot>
    </v-content>

    <v-footer app color="#6D4C41">
     <v-container fill-height fluid>
        <v-row align="center" justify="center" class="text-center">
          <v-col md="4" > <label class="white--text"> تطوير وتصميم المهندس م. زاهر محي الدين المطرود</label></v-col>
        </v-row>
      </v-container >
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>