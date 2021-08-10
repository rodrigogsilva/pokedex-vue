<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <v-spacer></v-spacer>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                circle
                v-model="page"
                class="my-4"
                :length="9"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>

        <v-row>
          <v-col v-for="n in 18" :key="n" xl="2" md="4" sm="6" xs="12">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="18rem"
              ></v-img>

              <v-card-title> Top western road trips </v-card-title>

              <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange lighten-2" text> Explore </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                circle
                v-model="page"
                class="my-4"
                :length="9"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { AllResponse, getAll } from "@/services/pokeAPI";
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    pokemons: [] as AllResponse[],
    page: 1,
    show: false,
  }),
  async created() {
    document.title = "Pokedex | Home";
    // this.pokemons = await getAll();
  },
});
</script>
