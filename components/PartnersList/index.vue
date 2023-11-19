<template>
  <div class="partners-list">
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> {{ $t('partner-1-title') }} </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> {{ $t('partner-1-sub-title') }} </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> {{ $t('partner-2-title') }} </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> {{ $t('partner-2-sub-title') }} </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> {{ $t('partner-3-title') }} </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> {{ $t('partner-3-sub-title') }} </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> {{ $t('partner-4-title') }} </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> {{ $t('partner-4-sub-title') }} </template>
    </icon-text>
    <btn :text="$t('join_as_partner')" variant="success" />
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'PartnersList'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
