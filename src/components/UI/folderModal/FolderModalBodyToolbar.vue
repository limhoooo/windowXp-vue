<template>
  <div>
    <section class="folderModal__toolbar">
      <div class="folderModal__toolbar--option">
        <ul>
          <li class="option">파일(F)</li>
          <li class="option">편집(E)</li>
          <li class="option">보기(V)</li>
          <li class="option">즐겨찾기(A)</li>
          <li class="option">도구(T)</li>
          <li class="option">도움말(H)</li>
        </ul>
        <img :src="window_mini_logo" alt="window_mini_logo" />
      </div>
    </section>
    <section class="folderModal__toolbar">
      <div
        class="folderModal__toolbar--option folderModal__toolbar--option--function"
      >
        <ul>
          <li>
            <img :src="arrow_left" alt="arrow_left" />
            <span>뒤로</span>
            <div class="arrow"></div>
          </li>
          <li>
            <img :src="arrow_right" alt="arrow_right" />
            <div class="arrow"></div>
          </li>
          <li>
            <img :src="folder_up" alt="folder_up" />
          </li>
          <li class="line"></li>
          <li>
            <img :src="search" alt="search" style="width: 22px; height: 22px" />
            <span>검색</span>
          </li>
          <li>
            <img :src="folder_open" alt="folder_open" />
            <span>폴더</span>
          </li>
          <li class="line"></li>
          <li>
            <img :src="folder_content" alt="folder_content" />
            <div class="arrow"></div>
          </li>
        </ul>
      </div>
    </section>
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
.folderModal__toolbar {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  line-height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  flex-shrink: 0;
}
.folderModal__toolbar--option {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1px 0px 1px 2px;
  border-left: 0px;
  flex: 1 1 0%;
  display: flex;
  justify-content: space-between;
}
.folderModal__toolbar--option ul {
  margin: 0;
  padding: 0;
  padding-top: 2px;
  display: flex;
}
.folderModal__toolbar--option li {
  list-style: none;
  font-size: 11px;
  height: 100%;
  position: relative;
  padding: 3px 9px;
  box-sizing: border-box;
}
.folderModal__toolbar--option .option:hover {
  background-color: rgb(22, 96, 232);
  color: rgb(255, 255, 255);
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
  height: 100%;
}
.folderModal__toolbar--option--function li {
  display: flex;
  align-items: center;
  padding: 2px 3px;
  border: 1px solid blanchedalmond;
}
.folderModal__toolbar--option--function li:hover {
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 1px inset;
}
.folderModal__toolbar--option--function .line {
  height: 90%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0px 2px;
  padding: 0;
}
.folderModal__toolbar--option--function .arrow {
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px 4px;
}
.folderModal__toolbar--option--function .arrow::before {
  content: "";
  display: block;
  border-width: 3px 3px 0px;
  border-color: rgb(0, 0, 0) transparent;
  border-style: solid;
}
.folderModal__toolbar--option--function img {
  height: 28px;
  width: 28px;
  margin: 0px 4px 0px 1px;
}
</style>
