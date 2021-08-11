<template>
  <v-app-bar app dense color="#90caf9">
    <v-spacer></v-spacer>
    <img src="@/assets/logo_pokedex.png" alt="logo pokedex" class="logo" />
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.logo {
  padding-top: 2.5rem;
  height: 7rem;
}
</style>
