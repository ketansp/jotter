<template>
  <div id="container">
    <div
      id="group-sidebar"
      class="float-left margin-top-20px padding-top-20px padding-right-20px padding-left-20px padding-bottom-20px"
    >
      <div>this is group sidebar</div>
    </div>
    <div
      id="sidebar"
      class="float-left margin-top-20px padding-top-20px padding-right-20px padding-left-20px padding-bottom-20px"
    >
      <div>this is sidebar</div>
    </div>
    <div id="editor" class="float-left margin-top-20px"></div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorJS from "../../../node_modules/@editorjs/editorjs";

@Component({
  components: {}
})
export default class NoteParent extends Vue {
  editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: "editor"
  });
}
</script>


<style lang="scss">
#container {
  // height: 95%;
  // min-height: 95%;
  // max-height: 95%;
}

#group-sidebar {
  width: 17.5%;
  min-width: 220px;
  border-right: 1px solid #e5e5e5;
  height: 800px;
  min-height: 100%;
  overflow: scroll;
}

#sidebar {
  width: 17.5%;
  min-width: 220px;
  border-right: 1px solid #e5e5e5;
  height: 800px;
  min-height: 100%;
  overflow: scroll;
}

#editor {
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  width: 55% !important;
  max-width: 55% !important;

  // .ce-block__content {
  //   max-width: 900px;
  // }

  .ce-toolbar__actions {
    left: -50px;
    top: 10px;
  }

  .ce-toolbar__plus {
    left: -35px;
  }

  .ce-toolbox--opened {
    left: 0px;
  }

  .ce-settings {
    right: auto;
  }

  .cdx-list__item {
    padding: 2px 0 2px 3px !important;
    line-height: normal !important;
  }

  .cdx-checklist__item {
    // height: 22px;
    padding: 2px 0 2px 0px !important;
    line-height: normal !important;
  }
}
</style>
