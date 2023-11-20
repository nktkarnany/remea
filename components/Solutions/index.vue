<template>
  <div class="solutions">
    <solution id="residential-charging" img="/residential-charging.png" residential prop-dev>
      <template #content>
        <multiple-content>
          <template #superscript>{{ $t('solutions-upper') }}</template>
          <template #title>{{ $t('solution-1-title') }}</template>
          <template #text>
            <p>{{ $t('solution-1-sub-title') }}</p>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-1-item-1') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-1-item-2') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-1-item-3') }}</p>
              </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
    <solution id="commercial-charging" img="/commercial-charging.png" commercial hospitality>
      <template #content>
        <multiple-content>
          <template #superscript>{{ $t('solutions-upper') }}</template>
          <template #title>{{ $t('solution-2-title') }}</template>
          <template #text>
            <p>{{ $t('solution-2-sub-title') }}</p>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-2-item-1') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-2-item-2') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-2-item-3') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-2-item-4') }}</p>
              </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
    <solution id="o-and-b-charging" img="/o&b-charging.png" commercial eics>
      <template #content>
        <multiple-content>
          <template #superscript>{{ $t('solutions-upper') }}</template>
          <template #title>{{ $t('solution-3-title') }}</template>
          <template #text>
            <p>{{ $t('solution-3-sub-title') }}</p>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-3-item-1') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-3-item-2') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-3-item-3') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-3-item-4') }}</p>
              </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
    <solution id="fleet-charging" img="/fleet-charging.png" ev-fleets>
      <template #content>
        <multiple-content>
          <template #superscript>{{ $t('solutions-upper') }}</template>
          <template #title>{{ $t('solution-4-title') }}</template>
          <template #text>
            <p>{{ $t('solution-4-sub-title') }}</p>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-4-item-1') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-4-item-2') }}</p>
              </template>
            </icon-text>
            <icon-text class="mb-5">
              <template #icon>
                <NuxtImg src="/check-icon-sm.svg" />
              </template>
              <template #text>
                <p>{{ $t('solution-4-item-3') }}</p>
              </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'Solutions'
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
