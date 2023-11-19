<template>
  <div class="remea-hero">
    <white-label-link />
    <p class="display-lg text-semibold text-center">{{ $t('hero-title') }}</p>
    <p class="text-lg text-center">
      {{ $t('hero-text') }}
    </p>
    <NuxtImg src="/hero-img.png" />
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'RemeaHero'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
