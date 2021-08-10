<template>
  <v-col xl="2" md="4" sm="6" xs="12">
    <div class="card">
      <div class="card__side card__side--front" :style="cardColor">
        <div class="d-flex justify-center mb-6">
          <div class="card__header">
            <img
              class="card__picture pa-2"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx}.svg`"
              alt="Pokemon picture"
            />
          </div>
        </div>
        <div class="card__details">
          <p class="card__details--number">#{{ pokeNumber }}</p>
          <ul>
            <li>Name: CHANGE THIS</li>
            <li>Type: CHANGE TYPES</li>
          </ul>
        </div>
      </div>

      <div class="card__side card__side--back" :style="cardColor">
        <div class="card__cta">
          <div class="card__status-box">
            <p class="card__status-title">Status</p>
            <ul>
              <li>Status thinging 1</li>
              <li>Status thinging 2</li>
              <li>Status thinging 3</li>
              <li>Status thinging 4</li>
              <li>Status thinging 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "Card",
  props: {
    idx: Number,
  },
  computed: {
    pokeNumber() {
      return this.idx.toString().padStart(3, "0");
    },
    cardColor() {
      return {
        "background-color": `rgb(130, ${Math.random() * 255}, 90)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  perspective: 150rem;
  position: relative;
  height: 23rem;

  &__side {
    border: 0.5rem solid #fff;
    height: 23rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 1rem 2.5rem rgba(#000, 0.15);

    &--back {
      transform: rotateY(180deg);
    }
  }

  &:hover &__side--front {
    transform: rotateY(-180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0deg);
  }

  &__header {
    margin-top: 1rem;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
  }

  &__picture {
    height: 7rem;
    width: 7rem;
  }

  &__details {
    padding: 0.5rem;

    ul {
      list-style: none;
      padding: 1.25rem;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 1rem;
    }

    &--number {
      text-align: center;
      background-color: rgba(0, 0, 0, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 1rem;
    }
  }

  &__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }

  &__status-box {
    padding-left: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 1rem;
    border-radius: 1rem;
    height: 20rem;

    ul {
      list-style: none;
    }

    li:not(:first-child) {
      padding-top: 1rem;
    }
  }

  &__status-title {
    text-align: center;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 48em), only screen and (hover: none) {
    height: auto;
    background-color: #fff;
    box-shadow: 0 1rem 2.5rem rgba(#000, 0.15);

    &__side {
      height: auto;
      position: relative;
      border-radius: 3px;
      box-shadow: none;

      &--back {
        transform: rotateY(0);
      }
    }

    &:hover &__side--front {
      transform: rotateY(0);
    }

    &__details {
      padding: 1rem;
    }

    &__cta {
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0);
      width: 100%;
      padding: 7rem 4rem 4rem 4rem;
    }

    &__status-box {
      margin-bottom: 3rem;
    }

    &__price-value {
      font-size: 4rem;
    }
  }
}
</style>
