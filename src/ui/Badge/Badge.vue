<template>
  <span class="badge" :class="batchMode">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ["mode"],
  computed: {
    batchMode() {
      return this.mode === "elegant"
        ? `badge-${this.mode}`
        : `badge-${this.mode} zero-margin-left`;
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.15rem 1.25rem;
  background-color: #ccc;
  color: #292929;
  margin: 0 0.75rem;
  border-radius: 30px;
}

.zero-margin-left {
  margin-left: 0;
}

.badge-highlight {
  background-color: #f0b800;
  color: #000000;
}

.badge-elegant {
  background-color: #45006d;
  color: #ffffff;
}
</style>
