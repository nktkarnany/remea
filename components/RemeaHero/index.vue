<template>
  <div class="remea-hero">
    <white-label-link />
    <p class="title">{{ $t('hero-title') }}</p>
    <p class="sub-title">
      {{ $t('hero-text') }}
    </p>
    <div class="actions">
      <btn variant="info" :text="$t('demo')" />
      <btn variant="success" :text="$t('book_consultation')" />
    </div>
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
