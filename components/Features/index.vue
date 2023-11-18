<template>
  <div class="features">
    <multiple-content>
      <template #superscript>Features</template>
      <template #title>Everything from setup to billing - we’ve got you covered.</template>
      <template #text>
        <p>
          Remea is the operating platform to manage and monitor EV charging stations according to your needs and bill
          the charging in a way that integrates with your business model.
        </p>
      </template>
    </multiple-content>
    <NuxtImg src="/features.png" />
    <div class="features-text">
      <feature>
        <template #icon><NuxtImg src="/check-icon.svg" /></template>
        <template #title>Easy & Flexible Setup</template>
        <template #text>
          Set your charging stations to fit your needs by adjusting the settings in the dashboard.
        </template>
      </feature>

      <feature>
        <template #icon><NuxtImg src="/check-icon.svg" /></template>
        <template #title>Energy Monitoring</template>
        <template #text> Track exactly how much energy is being used to manage your consumption effectively. </template>
      </feature>

      <feature>
        <template #icon><NuxtImg src="/check-icon.svg" /></template>
        <template #title>Cost Settlement</template>
        <template #text>
          Automated process of charging costs, payments, and bills issued for EV charging services.
        </template>
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
