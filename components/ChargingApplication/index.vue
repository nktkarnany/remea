<template>
  <div class="charging-app">
    <NuxtImg class="img" src="/charging-app.png" />
    <multiple-content class="content">
      <template #superscript>{{ $t('charging_app-upper') }}</template>
      <template #title>{{ $t('charging_app-title') }}</template>
      <template #text>
        <p>{{ $t('charging_app-sub-title-1') }}</p>
        <p>{{ $t('charging_app-sub-title-2') }}</p>
        <btn :text="$t('open_charging_app')" link class="mb-7" icon-placement="right">
          <template #icon>
            <NuxtImg src="./arrow-right.svg" />
          </template>
        </btn>
        <div class="divider"></div>
        <icon-text class="mb-5">
          <template #icon>
            <NuxtImg src="/1.svg" width="30" />
          </template>
          <template #text> {{ $t('open_charging_app-step-1') }} </template>
        </icon-text>
        <icon-text class="mb-5">
          <template #icon>
            <NuxtImg src="/2.svg" width="30" />
          </template>
          <template #text> {{ $t('open_charging_app-step-2') }} </template>
        </icon-text>
        <icon-text>
          <template #icon>
            <NuxtImg src="/3.svg" width="30" />
          </template>
          <template #text> {{ $t('open_charging_app-step-3') }} </template>
        </icon-text>
      </template>
    </multiple-content>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'ChargingApplication'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
