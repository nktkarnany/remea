<template>
  <div class="features">
    <multiple-content>
      <template #superscript>{{ $t('features-upper') }}</template>
      <template #title>{{ $t('features-title') }}</template>
      <template #text>
        <p>{{ $t('features-text') }}</p>
      </template>
    </multiple-content>
    <NuxtImg src="/features.png" />
    <div class="features-text">
      <feature>
        <template #icon><NuxtImg src="/check-icon.svg" /></template>
        <template #title>{{ $t('feature-1-title') }}</template>
        <template #text>{{ $t('feature-1-text') }}</template>
      </feature>

      <feature>
        <template #icon><NuxtImg src="/check-icon.svg" /></template>
        <template #title>{{ $t('feature-2-title') }}</template>
        <template #text>{{ $t('feature-2-text') }}</template>
      </feature>

      <feature>
        <template #icon><NuxtImg src="/check-icon.svg" /></template>
        <template #title>{{ $t('feature-3-title') }}</template>
        <template #text>{{ $t('feature-3-text') }}</template>
      </feature>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'Features'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
