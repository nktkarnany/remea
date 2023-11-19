<template>
  <div class="free-consultation">
    <div class="content">
      <h3 class="title">{{ $t('free_consultation-title') }}</h3>
      <p class="text">{{ $t('free_consultation-text') }}</p>
      <btn class="btn" variant="info" :text="$t('book_consultation')" />
    </div>
    <NuxtImg class="img" src="/free-consultation.png" />
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'FreeConsultation'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
