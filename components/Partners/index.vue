<template>
  <div class="partners">
    <multiple-content class="partners-main">
      <template #superscript>{{ $t('our_partners-upper') }}</template>
      <template #title>{{ $t('partners-title') }}</template>
      <template #text>
        <p>{{ $t('partners-sub-title') }}</p>
      </template>
    </multiple-content>
    <div class="partners-content">
      <partners-list />
      <NuxtImg src="/partners.png" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'Partners'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
