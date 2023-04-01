<template>
  <div class="folderModal">
    <div class="header__bg"></div>
    <header class="folderModal__header">
      <div>
        <img class="header--img" :src="computer" alt="computer" />
        <span> 내 컴퓨터 </span>
      </div>
      <div class="folderModal__header__btn">
        <button class="folderModal__header__btn--min"></button>
        <button class="folderModal__header__btn--max"></button>
        <button class="folderModal__header__btn--close"></button>
      </div>
    </header>
    <div class="folderModal__body">
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
              <img
                :src="search"
                alt="search"
                style="width: 22px; height: 22px"
              />
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
      <div class="folderModal__body--content">
        <div class="folderModal__body--content--left"></div>
        <div class="folderModal__body--content--right"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
import window_mini_logo from "../../assets/images/window_mini_logo.png";
import computer from "../../assets/images/computer.png";
import arrow_left from "../../assets/images/arrow_left.png";
import arrow_right from "../../assets/images/arrow_right.png";
import folder_content from "../../assets/images/folder_content.png";
import folder_open from "../../assets/images/folder_open.png";
import folder_up from "../../assets/images/folder_up.png";
import search from "../../assets/images/search.png";
export default defineComponent({
  setup() {
    return {
      window_mini_logo,
      computer,
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
.folderModal {
  width: 896px;
  height: 562px;
  z-index: 19;
  cursor: auto;

  display: flex;
  position: absolute;
  padding: 3px;
  background-color: rgb(8, 49, 217);
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: 200px;
}
.header__bg {
  background: linear-gradient(
    rgb(0, 88, 238) 0%,
    rgb(53, 147, 255) 4%,
    rgb(40, 142, 255) 6%,
    rgb(18, 125, 255) 8%,
    rgb(3, 111, 252) 10%,
    rgb(2, 98, 238) 14%,
    rgb(0, 87, 229) 20%,
    rgb(0, 84, 227) 24%,
    rgb(0, 85, 235) 56%,
    rgb(0, 91, 245) 66%,
    rgb(2, 106, 254) 76%,
    rgb(0, 98, 239) 86%,
    rgb(0, 82, 214) 92%,
    rgb(0, 64, 171) 94%,
    rgb(0, 48, 146) 100%
  );
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  height: 28px;
  pointer-events: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
}
.header__bg::after {
  content: "";
  opacity: 1;
  display: block;
  position: absolute;
  right: 0px;
  background: linear-gradient(to left, rgb(22, 56, 230) 0%, transparent 100%);
  top: 0px;
  bottom: 0px;
  width: 15px;
}
.header__bg::before {
  content: "";
  display: block;
  position: absolute;
  left: 0px;
  opacity: 1;
  background: linear-gradient(to right, rgb(22, 56, 230) 0%, transparent 100%);
  top: 0px;
  bottom: 0px;
  width: 15px;
}
.folderModal__header {
  display: flex;
  height: 25px;
  line-height: 25px;
  font-weight: 700;
  font-size: 12px;
  font-family: "Noto Sans";
  text-shadow: rgb(0, 0, 0) 1px 1px;
  color: white;
  position: absolute;
  left: 3px;
  right: 3px;
  -webkit-box-align: center;
  align-items: center;
}
.header--img {
  width: 16px;
  vertical-align: sub;
}
.folderModal__header__btn {
  position: absolute;
  right: 3px;
  top: -5px;
}
.folderModal__header__btn button {
  box-shadow: rgb(70, 70, 255) 0px -1px 2px 1px inset;
  background-image: radial-gradient(
    circle at 90% 90%,
    rgb(0, 84, 233) 0%,
    rgb(34, 99, 213) 55%,
    rgb(68, 121, 228) 70%,
    rgb(163, 187, 236) 90%,
    white 100%
  );
  margin-right: 1px;
  position: relative;
  width: 22px;
  height: 22px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 3px;
}

.folderModal__header__btn--min::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 13px;
  height: 3px;
  width: 8px;
  background-color: white;
}
.folderModal__header__btn--max::before {
  content: "";
  position: absolute;
  display: block;
  left: 4px;
  top: 4px;
  box-shadow: white 0px 3px inset, white 0px 0px 0px 1px inset;
  height: 12px;
  width: 12px;
}
.folderModal__header__btn--close {
  box-shadow: rgb(218, 70, 0) 0px -1px 2px 1px inset !important;
  background-image: radial-gradient(
    circle at 90% 90%,
    rgb(204, 70, 0) 0%,
    rgb(220, 101, 39) 55%,
    rgb(205, 117, 70) 70%,
    rgb(255, 204, 178) 90%,
    white 100%
  ) !important;
}
.folderModal__header__btn--close::after {
  content: "";
  position: absolute;
  left: 9px;
  top: 2px;
  transform: rotate(-45deg);
  height: 16px;
  width: 2px;
  background-color: white;
}
.folderModal__header__btn--close::before {
  content: "";
  position: absolute;
  left: 9px;
  top: 2px;
  transform: rotate(45deg);
  height: 16px;
  width: 2px;
  background-color: white;
}
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
.folderModal__body--content--left {
  width: 180px;
  height: 100%;
  background: linear-gradient(rgb(116, 138, 255) 0%, rgb(64, 87, 211) 100%);
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
}
.folderModal__body--content--right {
  height: 100%;
  overflow: auto;
  background-color: rgb(255, 255, 255);
  flex: 1 1 0%;
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
