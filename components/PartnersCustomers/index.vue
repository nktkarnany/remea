<template>
  <div class="partners-customers">
    <p class="text-md text-center">{{ $t('join_our_partners_and_customers') }}</p>
    <div class="logos">
      <NuxtImg src="/moja.png" />
      <NuxtImg src="/polnilnics.png" />
      <NuxtImg src="/postojnska.png" />
      <NuxtImg src="/lektro.png" />
      <NuxtImg src="/science-park.png" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'PartnersCustomers'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
