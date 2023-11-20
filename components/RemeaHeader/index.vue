<template>
  <nav class="remea-header">
    <logo />
    <btn :text="$t('product')" link href="#overview" tag="a" />
    <n-popselect v-model:value="solutions" :options="solutionOptions">
      <btn :text="$t('solutions')" link>
        <template #icon>
          <NuxtImg src="./chevron-down.svg" />
        </template>
      </btn>
    </n-popselect>
    <btn :text="$t('partners')" link href="#partners" tag="a" />
    <n-popselect v-model:value="locale" :options="options">
      <btn class="ml-auto text-uppercase" :text="locale || 'en'" link>
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
          <btn class="text-uppercase" :text="locale || 'en'" link>
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

const { locale, t } = useI18n();

const solutions = ref();

const solutionOptions = computed(() => [
  {
    label: t('solution-1'),
    value: 'residential-charging'
  },
  {
    label: t('solution-2'),
    value: 'commercial-charging'
  },
  {
    label: t('solution-3'),
    value: 'o-and-b-charging'
  },
  {
    label: t('solution-4'),
    value: 'fleet-charging'
  }
]);

const options = ref([
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Slovenščina',
    value: 'si'
  },
  {
    label: 'Deutsch',
    value: 'de'
  }
]);

const active = ref(false);
const placement = ref<DrawerPlacement>('right');

function activate(place: DrawerPlacement) {
  active.value = true;
  placement.value = place;
}

watch(solutions, (newSolution) => {
  window.location.hash = newSolution;
});
</script>

<script lang="ts">
export default {
  name: 'RemeaHeader'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
