<template>
  <div class="spin">
    <v-progress-circular
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

<style lang="scss" scoped>
.spin {
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
