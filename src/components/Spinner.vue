<template>
  <div class="spin">
    <v-progress-circular
      class="ring"
      :size="256"
      :width="20"
      color="dark-grey"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
.spin {
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
}

.ring {
  position: absolute;
  top: 40%;
  left: 40%;
  margin: 0 auto;
}
</style>
