<template>
  <div class="alignment">
    <h1 class="take-a-break-text">Take a break!</h1>
    <img src="../../assets/relax-take-a-break.png" class="take-a-break-image" />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class RelaxationParent extends Vue {}
</script>


<style lang="scss">
.alignment {
  text-align: center;
}

.take-a-break-image {
  width: 60%;
}

.take-a-break-text {
  padding-top: 140px;
  padding-bottom: 140px;
}
</style>
