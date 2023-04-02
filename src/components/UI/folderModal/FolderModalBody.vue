<template>
  <div class="folderModal__body">
    <FolderModalBodyToolbar />
    <div class="folderModal__body--content">
      <FolderModalBodyLeftMenu />
      <FolderModalBodyRightMenu />
    </div>
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
import window_mini_logo from "../../../assets/images/window_mini_logo.png";
import arrow_left from "../../../assets/images/arrow_left.png";
import arrow_right from "../../../assets/images/arrow_right.png";
import folder_content from "../../../assets/images/folder_content.png";
import folder_open from "../../../assets/images/folder_open.png";
import folder_up from "../../../assets/images/folder_up.png";
import search from "../../../assets/images/search.png";
export default defineComponent({
  components: {
    FolderModalBodyToolbar: defineAsyncComponent(() =>
      import("./FolderModalBodyToolbar.vue")
    ),
    FolderModalBodyLeftMenu: defineAsyncComponent(() =>
      import("./FolderModalBodyLeftMenu.vue")
    ),
    FolderModalBodyRightMenu: defineAsyncComponent(() =>
      import("./FolderModalBodyRightMenu.vue")
    ),
  },
  setup() {
    return {
      window_mini_logo,
      arrow_left,
      arrow_right,
      folder_content,
      folder_open,
      folder_up,
      search,
    };
  },
});
{
}
</script>

<style scoped>
.folderModal__body {
  margin-top: 25px;
  background: linear-gradient(
    to right,
    rgb(237, 237, 229) 0%,
    rgb(237, 232, 205) 100%
  );
  height: calc(100% - 25px);
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
.folderModal__body--content {
  display: flex;
  border-width: 0px 1px 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.4);
  border-image: initial;
  background-color: rgb(241, 241, 241);
  overflow: auto;
  font-size: 11px;
  position: relative;
  box-sizing: border-box;
  height: 100%;
}
.folderModal__body--content--left {
  width: 180px;
  height: 100%;
  background: linear-gradient(rgb(116, 138, 255) 0%, rgb(64, 87, 211) 100%);
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
