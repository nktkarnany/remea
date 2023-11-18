<template>
  <div class="solution">
    <div class="solution-content">
      <slot name="content"> </slot>
    </div>
    <NuxtImg class="solution-img" :src="img" />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    img: string;
  }>(),
  {
    img: '/residential-charging.png'
  }
);
</script>

<script lang="ts">
export default {
  name: 'Solution'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
