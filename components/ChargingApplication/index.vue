<template>
  <div class="charging-app">
    <NuxtImg class="img" src="/charging-app.png" />
    <multiple-content class="content">
      <template #superscript>CHARGING APPLICATION</template>
      <template #title>Remea Plug&Go for Simple Charging</template>
      <template #text>
        <p>
          Our web-based charging application makes it easy for the modern drivers to charge their electric vehicles.
          We’ve eliminated unnecessary steps to achieve the ultimate convenience.
        </p>
        <p>No downloads. No registration. No card-information stored.</p>
        <btn text="Open charging app" link />
        <icon-text>
          <template #icon>
            <NuxtImg src="/1.svg" />
          </template>
          <template #text> Scan QR code on a charging station </template>
        </icon-text>
        <icon-text>
          <template #icon>
            <NuxtImg src="/2.svg" />
          </template>
          <template #text> Enter your details </template>
        </icon-text>
        <icon-text>
          <template #icon>
            <NuxtImg src="/3.svg" />
          </template>
          <template #text> Choose payment method and charge </template>
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
