<template>
  <div>
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
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
import computer from "../../../assets/images/computer.png";
export default defineComponent({
  setup() {
    return {
      computer,
    };
  },
});
{
}
</script>

<style scoped>
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
</style>
