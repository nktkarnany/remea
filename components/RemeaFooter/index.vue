<template>
  <nav class="remea-footer">
    <div class="content">
      <logo />
      <p>
        At Remea we are future-proofing your home and business with a seamless lifestyle-adapted charging experience.
      </p>
      <p>© 2023 Remea. All rights reserved.</p>
      {{ $t('welcome') }}
      <form>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="de">de</option>
        </select>
      </form>
    </div>
    <div class="links">
      <ul>
        <li>Product</li>
        <li><btn text="Overview" link /></li>
        <li><btn text="Features" link /></li>
        <li><btn text="Solutions" link /></li>
        <li><btn text="Whitelabel" link /></li>
      </ul>
      <ul>
        <li>Company</li>
        <li><btn text="About Us" link /></li>
        <li><btn text="Careers" link /></li>
        <li><btn text="Press" link /></li>
        <li><btn text="News" link /></li>
      </ul>
      <ul>
        <li>Resources</li>
        <li><btn text="Downloads" link /></li>
      </ul>
      <ul>
        <li>Social</li>
        <li><btn text="LinkedIn" link /></li>
        <li><btn text="AngelList" link /></li>
      </ul>
      <ul>
        <li>Legal</li>
        <li><btn text="Terms" link /></li>
        <li><btn text="Privacy" link /></li>
        <li><btn text="Cookies" link /></li>
        <li><btn text="Licenses" link /></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<script lang="ts">
export default {
  name: 'RemeaFooter'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
