<template>
  <nav class="remea-footer">
    <div class="content">
      <logo />
      <p>{{ $t('remea_caption') }}</p>
      <p>{{ $t('remea_copyright') }}</p>
    </div>
    <div class="links">
      <ul>
        <li class="head">{{ $t('product') }}</li>
        <li><btn :text="$t('overview')" link href="#overview" tag="a" /></li>
        <li><btn :text="$t('features')" link href="#features" tag="a" /></li>
        <li><btn :text="$t('solutions')" link href="#solutions" tag="a" /></li>
        <li><btn :text="$t('whitelabel')" link href="#newProduct" tag="a" /></li>
      </ul>
      <ul>
        <li class="head">{{ $t('company') }}</li>
        <li>
          <btn
            :text="$t('about_us')"
            link
            href="https://www.linkedin.com/company/remeacharging/about/?viewAsMember=true"
            tag="a"
            target="_blank"
          />
        </li>
        <li>
          <btn
            :text="$t('careers')"
            link
            href="https://www.linkedin.com/company/remeacharging/jobs/?viewAsMember=true"
            tag="a"
            target="_blank"
          />
        </li>
        <li>
          <btn
            :text="$t('press')"
            link
            href="https://drive.google.com/drive/folders/11WZkD_lTwRpOy7sJY0AFW0rCwTZ0YM2X?usp=sharing"
            tag="a"
            target="_blank"
          />
        </li>
        <li>
          <btn
            :text="$t('news')"
            link
            href="https://www.linkedin.com/company/remeacharging/posts/?feedView=all&viewAsMember=true"
            tag="a"
            target="_blank"
          />
        </li>
      </ul>
      <ul>
        <li class="head">{{ $t('resources') }}</li>
        <li>
          <btn
            :text="$t('downloads')"
            link
            href="https://drive.google.com/drive/folders/10tZDvu4ihqAIs7jGgxiAwM6OZseDSl8I?usp=sharing"
            tag="a"
            target="_blank"
          />
        </li>
      </ul>
      <ul>
        <li class="head">{{ $t('social') }}</li>
        <li>
          <btn
            :text="$t('linkedin')"
            link
            href="https://www.linkedin.com/company/remeacharging/posts/?feedView=all&viewAsMember=true"
            tag="a"
            target="_blank"
          />
        </li>
        <li>
          <btn :text="$t('youtube')" link href="https://www.youtube.com/@remeacharging/" tag="a" target="_blank" />
        </li>
      </ul>
      <ul>
        <li class="head">{{ $t('legal') }}</li>
        <li><btn :text="$t('terms')" link /></li>
        <li><btn :text="$t('privacy')" link /></li>
        <li><btn :text="$t('cookies')" link /></li>
        <li><btn :text="$t('licenses')" link /></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'RemeaFooter'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
