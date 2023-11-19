<template>
  <n-button :type="variant" :round="round" :text="link" :size="size" :theme-overrides="BTN_THEME_OVERRIDES">{{
    text
  }}</n-button>
</template>

<script setup lang="ts">
import { BTN_THEME_OVERRIDES } from './config';

withDefaults(
  defineProps<{
    text: string;
    link: boolean;
    variant: string;
    size: string;
    round: boolean;
  }>(),
  {
    text: 'Button',
    link: false,
    variant: 'primary',
    size: 'medium',
    round: false
  }
);
</script>

<script lang="ts">
export default {
  name: 'Btn'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
