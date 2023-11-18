<template>
  <div class="content">
    <span class="content-sup">
      <slot name="superscript">PLATFORM OVERVIEW</slot>
    </span>
    <h2 class="content-title">
      <slot name="title">User-friendly solution to support your EV charging needs.</slot>
    </h2>
    <div class="content-text">
      <slot name="text">
        <p>
          As the world swiftly adopts zero-emission policies, the electric vehicle industry is expected to grow
          exponentially. However, today's charging infrastructure still has a long way to go.
        </p>
        <p>Persistent issues remain, which is exactly why we built Remea.</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'MultipleContent'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
