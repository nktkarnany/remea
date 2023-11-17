<template>
  <nav class="remea-header">
    <logo />
    <btn class="ml-7" text="Product" link />
    <btn class="ml-7" text="Solutions" link />
    <btn class="ml-7" text="Partners" link />
    <btn class="ml-auto" variant="success" text="Book Consultation" />
  </nav>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
  }>(),
  {
    text: 'Button'
  }
);
</script>

<script lang="ts">
export default {
  name: 'RemeaHeader'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
