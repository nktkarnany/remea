<template>
  <nav class="remea-header">
    <logo />
    <btn class="ml-7" :text="$t('product')" link />
    <btn class="ml-7" :text="$t('solutions')" link />
    <btn class="ml-7" :text="$t('partners')" link />
    <n-popselect v-model:value="locale" :options="options">
      <btn class="ml-auto" :text="locale || 'en'" link>
        <template #icon>
          <NuxtImg src="./chevron-down.svg" />
        </template>
      </btn>
    </n-popselect>
    <btn class="menu" link @click="activate('left')">
      <template #icon>
        <NuxtImg src="./menu.svg" />
      </template>
    </btn>
    <n-drawer v-model:show="active" :placement="placement">
      <n-drawer-content class="text-center">
        <btn :text="$t('product')" link />
        <btn :text="$t('solutions')" link />
        <btn :text="$t('partners')" link />
        <n-popselect v-model:value="locale" :options="options">
          <btn :text="locale || 'en'" link>
            <template #icon>
              <NuxtImg src="./chevron-down.svg" />
            </template>
          </btn>
        </n-popselect>
      </n-drawer-content>
    </n-drawer>
  </nav>
</template>

<script setup lang="ts">
import type { DrawerPlacement } from 'naive-ui';

const { locale } = useI18n();

const options = ref([
  {
    label: 'en',
    value: 'en'
  },
  {
    label: 'de',
    value: 'de'
  },
  {
    label: 'si',
    value: 'si'
  }
]);

const active = ref(false);
const placement = ref<DrawerPlacement>('right');

function activate(place: DrawerPlacement) {
  active.value = true;
  placement.value = place;
}
</script>

<script lang="ts">
export default {
  name: 'RemeaHeader'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
