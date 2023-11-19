<template>
  <div class="new-product">
    <multiple-content class="content">
      <template #superscript>{{ $t('new_product-upper') }}</template>
      <template #title>{{ $t('new_product-title') }}</template>
      <template #text>
        <p>{{ $t('new_product-text-1') }}</p>
        <p>{{ $t('new_product-text-2') }}</p>
      </template>
    </multiple-content>
    <NuxtImg class="img" src="/new-product.png" />
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'NewProduct'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
