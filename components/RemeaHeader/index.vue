<template>
  <nav class="remea-header">
    <logo />
    <btn class="ml-7" :text="$t('product')" link />
    <btn class="ml-7" :text="$t('solutions')" link />
    <btn class="ml-7" :text="$t('partners')" link />
    <btn class="ml-auto" variant="success" :text="$t('book_consultation')" />
    <btn class="menu" link>
      <template #icon>
        <NuxtImg src="./menu.svg" />
      </template>
    </btn>
  </nav>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'RemeaHeader'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
