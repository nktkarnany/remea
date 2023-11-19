<template>
  <nav class="remea-footer">
    <div class="content">
      <logo />
      <p>{{ $t('remea_caption') }}</p>
      <p>{{ $t('remea_copyright') }}</p>
      <form>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="de">de</option>
        </select>
      </form>
    </div>
    <div class="links">
      <ul>
        <li>{{ $t('product') }}</li>
        <li><btn :text="$t('overview')" link /></li>
        <li><btn :text="$t('features')" link /></li>
        <li><btn :text="$t('solutions')" link /></li>
        <li><btn :text="$t('whitelabel')" link /></li>
      </ul>
      <ul>
        <li>{{ $t('company') }}</li>
        <li><btn :text="$t('about_us')" link /></li>
        <li><btn :text="$t('careers')" link /></li>
        <li><btn :text="$t('press')" link /></li>
        <li><btn :text="$t('news')" link /></li>
      </ul>
      <ul>
        <li>{{ $t('resources') }}</li>
        <li><btn :text="$t('downloads')" link /></li>
      </ul>
      <ul>
        <li>{{ $t('social') }}</li>
        <li><btn :text="$t('linkedin')" link /></li>
        <li><btn :text="$t('angellist')" link /></li>
      </ul>
      <ul>
        <li>{{ $t('legal') }}</li>
        <li><btn :text="$t('terms')" link /></li>
        <li><btn :text="$t('privacy')" link /></li>
        <li><btn :text="$t('cookies')" link /></li>
        <li><btn :text="$t('licenses')" link /></li>
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
