<template>
  <div style="display: flex; flex-direction: row;">
    <div class="width-66-percent">
      <img src="../../assets/goals.png" style="max-height:300px;" />
    </div>
    <div class="width-33-percent">
      Professional Goal
      <div class="card">
        <h3>Descrição da funcionalidade deve vir abaixo do título do caso de uso.</h3>
        <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.</p>
      </div>
    </div>
    <div class="width-33-percent">
      Professional Goal
      <div class="card">
        <h3>Descrição da funcionalidade deve vir abaixo do título do caso de uso.</h3>
        <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.</p>
      </div>
    </div>
    <div class="width-33-percent">
      Professional Goal
      <div class="card">
        <h3>Descrição da funcionalidade deve vir abaixo do título do caso de uso.</h3>
        <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.</p>
      </div>
    </div>
    <div class="width-33-percent">
      Professional Goal
      <div class="card">
        <h3>Descrição da funcionalidade deve vir abaixo do título do caso de uso.</h3>
        <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.</p>
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

.card {
  display: inline-block;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  margin: 20px;
  position: relative;
  margin-bottom: 50px;
  transition: all 0.2s ease-in-out;
}
</style>
