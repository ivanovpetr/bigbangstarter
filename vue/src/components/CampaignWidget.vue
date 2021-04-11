<template>
  <div class="col mb-3">
    <div class="card card-cover h-100 overflow-hidden shadow-lg">
      <div class="d-flex flex-column h-100 pt-3 pb-3 text-shadow-1">
        <div class="container-fluid">
          <div class="row justify-content-end mb-3">
            <span class="col-4 badge bg-info text-dark">In progress</span>
          </div>
          <div class="row">
            <h2 class="fs-2 text-dark mb-3 display-6 lh-1 fw-bold">Campaign 1</h2>
          </div>
          <div class="row">
            <div class="col">
              <span class="fw-bold">Ends in</span>
            </div>
          </div>
          <div class="row text-dark text-center">
            <div class="col countdown-section"><span>1</span>days</div>
            <div class="col countdown-section"><span>3</span>Hours</div>
            <div class="col countdown-section"><span>12</span>Minutes</div>
            <div class="col countdown-section"><span>33</span>Seconds</div>
          </div>
          <div class="row">
            <div class="col">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="text-dark">500/900</p>
            </div>
            <div class="col">
              <p class="text-dark text-end">25%</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({
  name: "CampaignWidget",
},)
export default class CampaignWidget extends Vue {
}
</script>

<style scoped>

</style>