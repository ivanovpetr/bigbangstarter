<template>
  <div class="container py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Campaigns</h2>

    <div class="row row-cols-3 align-items-stretch py-5">
      <CampaignWidget></CampaignWidget>
    </div>

  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CampaignWidget from "./CampaignWidget.vue"

@Options({
  components: {
    CampaignWidget,
  },
  name: "CampaignList"
})
export default class CampaignList extends Vue {
}
</script>

<style scoped>

</style>