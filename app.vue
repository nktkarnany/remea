<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <NuxtPage />
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
import type { GlobalThemeOverrides } from 'naive-ui';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: 'Inter, Helvetica, Arial, Sans-Serif',
    primaryColor: 'var(--primary)',
    primaryColorHover: 'var(--primary)',
    primaryColorPressed: 'var(--primary)',
    primaryColorSuppl: 'var(--primary)',
    infoColor: 'var(--white)',
    infoColorHover: 'var(--white)',
    infoColorPressed: 'var(--white)',
    infoColorSuppl: 'var(--white)',
    successColor: 'var(--secondary)',
    successColorHover: 'var(--secondary)',
    successColorPressed: 'var(--secondary)',
    successColorSuppl: 'var(--secondary)',
    warningColor: 'var(--warning)',
    warningColorHover: 'var(--warning)',
    warningColorPressed: 'var(--warning)',
    warningColorSuppl: 'var(--warning)',
    errorColor: 'var(--alert)',
    errorColorHover: 'var(--alert)',
    errorColorPressed: 'var(--alert)',
    errorColorSuppl: 'var(--alert)'
  }
};
</script>
