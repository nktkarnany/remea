<template>
  <div class="partners">
    <multiple-content class="partners-main">
      <template #superscript>OUR PARTNERS</template>
      <template #title>Hardware Manufacturers and Installers (EICs)</template>
      <template #text>
        <p>
          Discover the compelling reasons to become our partner and leverage the platform’s capabilities to provide your
          customers with the experience they are looking for.
        </p>
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
