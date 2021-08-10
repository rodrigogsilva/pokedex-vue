<template>
  <v-main>
    <v-container>
      <div class="list__main">
        <v-row>
          <card v-for="n in 18" :key="n" :idx="n" />
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "PokeList",

  components: { Card },
};
</script>
<style scoped>
.list__main {
  padding-top: 5rem;
}
</style>
