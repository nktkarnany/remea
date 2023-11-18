<template>
  <div class="platform-overview">
    <NuxtImg class="platform-overview-img" src="/platform-overview.png" />
    <multiple-content class="platform-overview-content">
      <template #superscript>PLATFORM OVERVIEW</template>
      <template #title>User-friendly solution to support your EV charging needs.</template>
      <template #text>
        <p>
          As the world swiftly adopts zero-emission policies, the electric vehicle industry is expected to grow
          exponentially. However, today's charging infrastructure still has a long way to go.
        </p>
        <p>Persistent issues remain, which is exactly why we built Remea.</p></template
      >
    </multiple-content>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'PlatformOverview'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
