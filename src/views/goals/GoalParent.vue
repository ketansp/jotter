<template>
  <div class="row">
    <div class="col-sm-10 offset-sm-1">
      <div class="row">
        <div class="col-sm-8" style="text-align:center;">
          <img src="../../assets/goals.png" class="block-height margin-top-20px margin-bottom-20px" />
        </div>
        <div class="col-sm-4 padding-top-20px padding-bottom-20px">
          <div class="card block-height">
            <h5 class="card-header">Professional Goal</h5>
            <div
              class="card-body overflow-y-scroll placeholder-text"
              data-placeholder="Specify a tangible and measurable goal related to your profession or career, with a target date. "
              contenteditable="true"
            ></div>
          </div>
        </div>
        <div class="col-sm-4 padding-top-20px padding-bottom-20px">
          <div class="card block-height">
            <h5 class="card-header">Personal Goal</h5>
            <div
              class="card-body overflow-y-scroll placeholder-text"
              data-placeholder="Specify a tangible and measurable goal which would make you a better human, with a target date. "
              contenteditable="true"
            ></div>
          </div>
        </div>
        <div class="col-sm-4 padding-top-20px padding-bottom-20px">
          <div class="card block-height">
            <h5 class="card-header">Contribution Goal</h5>
            <div
              class="card-body overflow-y-scroll placeholder-text"
              data-placeholder="Specify a tangible and measurable goal related to contributions towards society, with a target date. "
              contenteditable="true"
            ></div>
          </div>
        </div>
        <div class="col-sm-4 padding-top-20px padding-bottom-20px">
          <div class="card block-height">
            <h5 class="card-header">Adventure Goal</h5>
            <div
              class="card-body overflow-y-scroll placeholder-text"
              data-placeholder="Specify a tangible and measurable goal for your next adventure, with a target date. "
              contenteditable="true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class GoalParent extends Vue {}
</script>


<style lang="scss">
.width-66-percent {
  width: 66%;
}

.width-33-percent {
  width: 33%;
}

.block-height {
  height: 300px;
}

.placeholder-text:empty:not(:focus):before {
  content: attr(data-placeholder);
}
</style>
