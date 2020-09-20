<template>
  <div>
    <vue-cal
      :time="true"
      active-view="month"
      :disable-views="['years']"
      style="height: 800px"
      :events="events"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const VueCal = require("vue-cal");
import "vue-cal/dist/vuecal.css";

@Component({
  components: {
    VueCal
  }
})
export default class NoteParent extends Vue {
  data() {
    return {
      events: [
        {
          start: new Date("2020-09-21"),
          end: new Date("2020-09-22"),
          title: "Need to go shopping",
          content: '<i class="v-icon material-icons">shopping_cart</i>',
          class: "leisure"
        }
        // {
        //   start: "2020-09-21";
        //   end: "2020-09-21";
        //   title: "Golf with John";
        //   content: '<i class="v-icon material-icons">golf_course</i>';
        //   class: "sport";
        // },
        // {
        //   start: "2020-09-22";
        //   end: "2020-09-22";
        //   title: "Dad's birthday!";
        //   content: '<i class="v-icon material-icons">cake</i>';
        //   class: "sport";
        // }
      ]
    };
  }
}
</script>

<style lang="scss">
.vuecal__menu {
  background-color: inherit;
}

.vuecal__title-bar {
  background-color: inherit;
}

.vuecal {
  box-shadow: none;
}

.vuecal__view-btn {
  border-bottom: 0px solid #42b983;
}

.vuecal__view-btn--active {
  border-bottom: 2px solid #42b983;
}

.vuecal__now-line {
  color: #42b983;
}
</style>
