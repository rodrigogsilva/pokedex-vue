<template>
  <li class="status">
    {{ status.stat.name.split("-").join(" ") }}:
    <span>{{ status.base_stat }}</span>
  </li>
</template>

<script>
export default {
  name: "CardDetails",
  props: {
    status: Object,
  },
};
</script>

<style scoped>
.status {
  display: flex;
  justify-content: space-between;
}
</style>
