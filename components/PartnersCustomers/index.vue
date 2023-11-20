<template>
  <div class="partners-customers">
    <p class="text">{{ $t('join_our_partners_and_customers') }}</p>
    <div class="logos">
      <NuxtImg class="img1" src="/moja.png" />
      <NuxtImg class="img2" src="/polnilnics.png" />
      <NuxtImg class="img3" src="/postojnska.png" />
      <NuxtImg class="img4" src="/lektro.png" />
      <NuxtImg class="img5" src="/science-park.png" />
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
