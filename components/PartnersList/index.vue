<template>
  <div class="partners-list">
    <icon-text>
      <template #icon>
        <NuxtImg src="/offer-complete.svg" />
      </template>
      <template #text>
        <div class="text">
          <p class="title">{{ $t('partner-1-title') }}</p>
          <p class="sub-title">{{ $t('partner-1-sub-title') }}</p>
        </div>
      </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/real-time.svg" />
      </template>
      <template #text>
        <div class="text">
          <p class="title">{{ $t('partner-2-title') }}</p>
          <p class="sub-title">{{ $t('partner-2-sub-title') }}</p>
        </div>
      </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-charger.svg" />
      </template>
      <template #text>
        <div class="text">
          <p class="title">{{ $t('partner-3-title') }}</p>
          <p class="sub-title">{{ $t('partner-3-sub-title') }}</p>
        </div>
      </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/profit-sharing.svg" />
      </template>
      <template #text>
        <div class="text">
          <p class="title">{{ $t('partner-4-title') }}</p>
          <p class="sub-title">{{ $t('partner-4-sub-title') }}</p>
        </div>
      </template>
    </icon-text>
    <btn
      :text="$t('join_as_partner')"
      variant="success"
      href="https://calendly.com/remea-meet/remea"
      tag="a"
      target="_blank"
    />
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'PartnersList'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
