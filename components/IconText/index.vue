<template>
  <div class="icon-text">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'IconText'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
