<template>
  <div class="solutions">
    <solution img="/residential-charging.png">
      <template #content>
        <multiple-content>
          <template #superscript>SOLUTIONS</template>
          <template #title>For Residential Charging</template>
          <template #text>
            <p>
              Most EV charging still takes place at home. Our platform supports efficient implementation of charging
              solutions in residential complexes.
            </p>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Automated System: Operating information from energy monitoring to reporting. </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text>
                Simple Dashboards: A user-friendly interface for an overview of charging sessions.
              </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Power Management: Ensure optimal and cost-effective charging for residents. </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
    <solution img="/commercial-charging.png">
      <template #content>
        <multiple-content>
          <template #superscript>SOLUTIONS</template>
          <template #title>For Commercial Charging</template>
          <template #text>
            <p>
              Profit from EV charging at your location to attract and retain new customers while exploring the business
              potential of EV charging.
            </p>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Set up an EV charging service tailored to your business model. </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Easy to operate with flexible terms. </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Complete automation, zero effort required for operation. </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Generate an additional revenue stream from charging services. </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
    <solution img="/o&b-charging.png">
      <template #content>
        <multiple-content>
          <template #superscript>SOLUTIONS</template>
          <template #title>For Offices & Business Charging</template>
          <template #text>
            <p>Manage EV charging in your organization to fit your specific needs.</p>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text>
                Combine internal and externam commercial EV charging to increase the total value of charging services.
              </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Manage and monitor all EV charging use cases within the organization. </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Provide EV chargers for external commercial use outside of working hours. </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Oversee the status and receive monthly reports on EV charging activities. </template>
            </icon-text>
          </template>
        </multiple-content>
      </template>
    </solution>
    <solution img="/fleet-charging.png">
      <template #content>
        <multiple-content>
          <template #superscript>SOLUTIONS</template>
          <template #title>For Fleet Charging</template>
          <template #text>
            <p>
              Maximize efficiency and savings for your electric vehicle fleet by strategically managing charging times
              and costs.
            </p>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Reserve and prioritize company EV chargers for fleet use. </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text>
                Enhance total fleet charging capacity by utilizing employees' home EV chargers.
              </template>
            </icon-text>
            <icon-text>
              <template #icon>
                <NuxtImg src="/check-icon.svg" />
              </template>
              <template #text> Reduce the overall cost of fleet charging with intelligent scheduling. </template>
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
