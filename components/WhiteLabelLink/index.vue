<template>
  <div class="white-label-link">
    <btn variant="success" :text="$t('new_product')" size="small" round />
    <span>{{ $t('white_label_solution_available') }}</span>
    <NuxtImg class="img" src="./arrow-right-green.svg" />
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'WhiteLabelLink'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
