<template>
  <div class="new-product">
    <multiple-content class="content">
      <template #superscript>NEW PRODUCT</template>
      <template #title>Our platform with your company branding.</template>
      <template #text>
        <p>
          In case you’d like to see our software in action with your branding on it (featuring your logos, colors, and
          fonts!) simply book a call with our team to receive a customized offer.
        </p>
        <p>
          Gain recognition in the EV charging market with your own charging solution at a fraction of the total
          development cost!
        </p>
      </template>
    </multiple-content>
    <NuxtImg class="img" src="/new-product.png" />
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'NewProduct'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
