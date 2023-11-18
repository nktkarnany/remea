<template>
  <div class="feature">
    <div class="feature-icon">
      <slot name="icon"> </slot>
    </div>
    <h4 class="feature-title">
      <slot name="title"></slot>
    </h4>
    <div class="feature-text">
      <slot name="text"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'Feature'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
