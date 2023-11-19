<template>
  <div class="questions">
    <div class="content">
      <h3 class="title">{{ $t('questions') }}</h3>
      <p class="text">{{ $t('questions-text') }}</p>
    </div>
    <div class="actions">
      <btn variant="secondary" :text="$t('book_consultation')" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'Questions'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
