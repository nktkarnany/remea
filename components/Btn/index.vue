<template>
  <n-button :type="variant" :text="link" :size="size" :theme-overrides="BTN_THEME_OVERRIDES">{{ text }}</n-button>
</template>

<script setup lang="ts">
import { BTN_THEME_OVERRIDES } from './config';

withDefaults(
  defineProps<{
    text: string;
    link: boolean;
    variant: string;
    size: string;
  }>(),
  {
    text: 'Button',
    link: false,
    variant: 'primary',
    size: 'medium'
  }
);
</script>

<script lang="ts">
export default {
  name: 'Btn'
};
</script>
