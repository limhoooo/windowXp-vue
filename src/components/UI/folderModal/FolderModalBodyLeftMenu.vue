<template>
  <div class="folderModal__body--content">
    <div class="folderModal__body--content--left">
      <div class="crad">
        <div class="crad--header">시스템 작업</div>
        <div class="crad--body">
          <div class="crad--body--row">
            <img :src="left_icon_01" alt="left_icon_01_png" />
            <p>화면 시스템 정보</p>
          </div>
          <div class="crad--body--row">
            <img :src="left_icon_02" alt="left_icon_02_png" />
            <p>프로그램 추가 또는 제거</p>
          </div>
          <div class="crad--body--row">
            <img :src="left_icon_03" alt="left_icon_03_png" />

            <p>설정 변경</p>
          </div>
        </div>
      </div>
      <div class="crad">
        <div class="crad--header">다른 작업</div>
        <div class="crad--body">
          <div class="crad--body--row">
            <img :src="left_icon_04" alt="left_icon_04_png" />
            <p>내 네트워크 관리</p>
          </div>
          <div class="crad--body--row">
            <img :src="left_icon_05" alt="left_icon_05_png" />
            <p>내 폴더</p>
          </div>
          <div class="crad--body--row">
            <img :src="left_icon_06" alt="left_icon_06_png" />
            <p>공류 폴더</p>
          </div>
          <div class="crad--body--row">
            <img :src="left_icon_07" alt="left_icon_07_png" />
            <p>환경설정</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
import left_icon_01 from "../../../assets/images/leftIcon/left_icon_01.png";
import left_icon_02 from "../../../assets/images/leftIcon/left_icon_02.png";
import left_icon_03 from "../../../assets/images/leftIcon/left_icon_03.png";
import left_icon_04 from "../../../assets/images/leftIcon/left_icon_04.png";
import left_icon_05 from "../../../assets/images/leftIcon/left_icon_05.png";
import left_icon_06 from "../../../assets/images/leftIcon/left_icon_06.png";
import left_icon_07 from "../../../assets/images/leftIcon/left_icon_07.png";

export default defineComponent({
  setup() {
    return {
      left_icon_01,
      left_icon_02,
      left_icon_03,
      left_icon_04,
      left_icon_05,
      left_icon_06,
      left_icon_07,
    };
  },
});
{
}
</script>

<style scoped>
.folderModal__body--content--left {
  width: 180px;
  height: 100%;
  background: linear-gradient(rgb(116, 138, 255) 0%, rgb(64, 87, 211) 100%);
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
}

.folderModal__body--content--left .crad {
  margin-bottom: 12px;
}
.folderModal__body--content--left .crad .crad--header {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 23px;
  padding-left: 11px;
  padding-right: 2px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    rgb(240, 240, 255) 0px,
    rgb(240, 240, 255) 30%,
    rgb(168, 188, 255) 100%
  );
  font-weight: 700;
  color: rgb(12, 50, 125);
  flex: 1 1 0%;
}
.folderModal__body--content--left .crad .crad--header:hover {
  color: rgb(28, 104, 255);
}
.folderModal__body--content--left .crad .crad--body {
  padding: 5px 10px;
  background: linear-gradient(
      to right,
      rgb(180, 200, 251) 0%,
      rgb(164, 185, 251) 50%,
      rgb(180, 200, 251) 100%
    )
    rgba(198, 211, 255, 0.87);
}
.folderModal__body--content--left .crad .crad--body .crad--body--row {
  font-size: 10px;
  line-height: 14px;
  color: rgb(12, 50, 125);
  display: flex;
}
.folderModal__body--content--left .crad .crad--body .crad--body--row img {
  margin-right: 5px;
  width: 14px;
  height: 14px;
}
.folderModal__body--content--left .crad .crad--body .crad--body--row p {
  margin-bottom: 2px;
}
.folderModal__body--content--left .crad .crad--body .crad--body--row p:hover {
  cursor: pointer;
  color: rgb(43, 114, 255);
  text-decoration: underline;
}
</style>
