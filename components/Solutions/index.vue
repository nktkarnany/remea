<template>
  <div class="solutions">
    <solution img="/residential-charging.png">
      <template #content>
        <multiple-content>
          <template #superscript>{{ $t('solutions-upper') }}</template>
          <template #title>{{ $t('solution-1-title') }}</template>
          <template #text>
            <p>{{ $t('solution-1-sub-title') }}</p>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-1-item-1') }} </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text>
                {{ $t('solution-1-item-2') }}
              </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-1-item-3') }} </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
    <solution img="/commercial-charging.png">
      <template #content>
        <multiple-content>
          <template #superscript>{{ $t('solutions-upper') }}</template>
          <template #title>{{ $t('solution-2-title') }}</template>
          <template #text>
            <p>{{ $t('solution-2-sub-title') }}</p>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-2-item-1') }} </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-2-item-2') }} </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-2-item-3') }} </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-2-item-4') }} </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
    <solution img="/o&b-charging.png">
      <template #content>
        <multiple-content>
          <template #superscript>{{ $t('solutions-upper') }}</template>
          <template #title>{{ $t('solution-3-title') }}</template>
          <template #text>
            <p>{{ $t('solution-3-sub-title') }}</p>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-3-item-1') }} </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-3-item-2') }} </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-3-item-3') }} </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-3-item-4') }} </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
    <solution img="/fleet-charging.png">
      <template #content>
        <multiple-content>
          <template #superscript>{{ $t('solutions-upper') }}</template>
          <template #title>{{ $t('solution-4-title') }}</template>
          <template #text>
            <p>{{ $t('solution-4-sub-title') }}</p>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-4-item-1') }} </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-4-item-2') }} </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> {{ $t('solution-4-item-3') }} </template>
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
