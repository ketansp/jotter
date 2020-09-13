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
const Header = require("@editorjs/header");
const CodeTool = require("@editorjs/code");
const Delimiter = require("@editorjs/delimiter");
const Checklist = require("@editorjs/checklist");
const List = require("@editorjs/list");
const Quote = require("@editorjs/quote");
const SimpleImage = require("@editorjs/simple-image");
const Table = require("@editorjs/table");
const InlineCode = require("@editorjs/inline-code");
const Paragraph = require("@editorjs/paragraph");
const Marker = require("@editorjs/marker");
const Underline = require("@editorjs/underline");
const Warning = require("@editorjs/warning");

@Component({
  components: {}
})
export default class NoteParent extends Vue {
  editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: "editor",
    autofocus: true,
    //data: existingData,
    tools: {
      header: {
        class: Header,
        config: {
          placeholder: "Enter a header",
          levels: [1, 2, 3, 4, 5, 6],
          defaultLevel: 3
        }
      },
      code: CodeTool,
      delimiter: Delimiter,
      checklist: {
        class: Checklist,
        inlineToolbar: true
      },
      list: {
        class: List,
        inlineToolbar: true
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author"
        }
      },
      image: SimpleImage,
      table: {
        class: Table,
        inlineToolbar: true,
        config: {
          rows: 5,
          cols: 4
        }
      },
      inlineCode: {
        class: InlineCode,
        shortcut: "CMD+SHIFT+M"
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true
      },
      warning: {
        class: Warning,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+W",
        config: {
          titlePlaceholder: "Title",
          messagePlaceholder: "Message"
        }
      },
      Marker: {
        class: Marker,
        shortcut: "CMD+SHIFT+M"
      },
      underline: Underline
    }
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
