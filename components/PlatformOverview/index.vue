<template>
  <div class="platform-overview">
    <NuxtImg class="img" src="/platform-overview.png" />
    <multiple-content class="content">
      <template #superscript>{{ $t('platform_overview-upper') }}</template>
      <template #title>{{ $t('platform_overview-title') }}</template>
      <template #text>
        <p>
          {{ $t('platform_overview-text-1') }}
        </p>
        <p>{{ $t('platform_overview-text-2') }}</p>
      </template>
    </multiple-content>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'PlatformOverview'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
