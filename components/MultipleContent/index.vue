<template>
  <div class="content">
    <span class="content-sup">
      <slot name="superscript"></slot>
    </span>
    <h2 class="content-title">
      <slot name="title"></slot>
    </h2>
    <div class="content-text">
      <slot name="text"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'MultipleContent'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
