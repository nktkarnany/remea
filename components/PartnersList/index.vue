<template>
  <div class="partners-list">
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> Offer complete turnkey solutions </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> Provide all-encompassing charging solutions for small and medium-sized businesses. </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> Real-Time Operational Insight </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text>
        Monitor charger status and operations in real time, ensuring smooth functionality while minimizing downtime and
        disruptions.
      </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> Check Charger Connectivity Post-Installation </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> Receive automated alerts about charger malfunctions, enabling swift issue resolution. </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text> Profit-Sharing Model </template>
    </icon-text>
    <icon-text>
      <template #icon>
        <NuxtImg src="/check-icon.svg" />
      </template>
      <template #text>
        Earn a commission from our charging profits, amplifying your revenue streams. Uphold a sterling reputation by
        providing reliable, uninterrupted charging experiences.
      </template>
    </icon-text>
    <btn text="Join as Partner" variant="success" />
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'PartnersList'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
