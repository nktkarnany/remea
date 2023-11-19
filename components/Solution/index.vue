<template>
  <div class="solution">
    <div class="solution-content">
      <slot name="content"> </slot>
    </div>
    <div class="solution-img">
      <NuxtImg :src="img" />
      <div class="badge-grid">
        <span :class="`badge residential ${residential ? 'active' : ''}`"> {{ $t('residential-badge') }} </span>
        <span :class="`badge commercial ${commercial ? 'active' : ''}`"> {{ $t('commercial-badge') }} </span>
        <span :class="`badge prop_dev ${propDev ? 'active' : ''}`"> {{ $t('prop_dev-badge') }} </span>
        <span :class="`badge charging_point ${chargingPoint ? 'active' : ''}`">
          {{ $t('charging_point-badge') }}
        </span>
        <span :class="`badge utility ${utility ? 'active' : ''}`"> {{ $t('utility-badge') }} </span>
        <span :class="`badge eics ${eics ? 'active' : ''}`"> {{ $t('eics-badge') }} </span>
        <span :class="`badge hospitality ${hospitality ? 'active' : ''}`"> {{ $t('hospitality-badge') }} </span>
        <span :class="`badge ev_fleets ${evFleets ? 'active' : ''}`"> {{ $t('ev_fleets-badge') }} </span>
        <span :class="`badge facility ${facility ? 'active' : ''}`"> {{ $t('facility-badge') }} </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    img: string;
    residential?: boolean;
    commercial?: boolean;
    propDev?: boolean;
    chargingPoint?: boolean;
    utility?: boolean;
    eics?: boolean;
    hospitality?: boolean;
    evFleets?: boolean;
    facility?: boolean;
  }>(),
  {
    img: '/residential-charging.png'
  }
);
</script>

<script lang="ts">
export default {
  name: 'Solution'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
