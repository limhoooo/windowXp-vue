<template>
  <div>
    <div class="error--modal">
      <header class="header">
        <div class="header--bg"></div>
        <div class="header__box">
          <div class="left">
            <img :src="error_icon" alt="error_icon" />
            <span>C:\</span>
          </div>
          <div class="right">
            <button class="cancle--btn" @click="closeModal"></button>
          </div>
        </div>
      </header>
      <div class="content">
        <div class="top">
          <img :src="error_icon" alt="error_icon" />
          <div v-if="isErrorModal">{{ isErrorModal }}</div>
          <div v-else>작업중인 기능입니다.</div>
        </div>
        <div class="bottom">
          <button class="confirm--btn" @click="closeModal">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from "vue";
import error_icon from "../../../assets/images/error_icon.png";
import { errorModalStore } from "../../../store/errorModalStore.js";

export default defineComponent({
  components: {},
  setup(props) {
    const store = errorModalStore();
    const isErrorModal = computed(() => store.IS_ERROR_MODAL);
    const closeModal = () => {
      store.IS_ERROR_MODAL = "";
    };
    return { error_icon, isErrorModal, closeModal };
  },
});
{
}
</script>

<style scoped>
.error--modal {
  width: 380px;
  height: auto;
  z-index: 999;
  display: flex;
  padding: 3px;
  background-color: rgb(8, 49, 217);
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header--bg {
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
.header__box {
  display: flex;
  height: 25px;
  line-height: 5px;
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
  justify-content: space-between;
}
.header__box img {
  width: 15px;
  height: 15px;
  margin-left: 1px;
  margin-right: 3px;
}
.header__box .left {
  display: flex;
  align-items: center;
}
.header__box .right {
  margin-bottom: 1px;
}
.content {
  flex: 1 1 0%;
  position: relative;
  margin-top: 25px;
  background-color: rgb(245, 245, 245);
  width: 100%;
  height: 100%;
  font-size: 11px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.content .top {
  display: flex;
  align-items: center;
}
.content .bottom {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.content img {
  width: 30px;
  margin-right: 20px;
}
.cancle--btn {
  box-shadow: rgb(218, 70, 0) 0px -1px 2px 1px inset;
  background-image: radial-gradient(
    circle at 90% 90%,
    rgb(204, 70, 0) 0%,
    rgb(220, 101, 39) 55%,
    rgb(205, 117, 70) 70%,
    rgb(255, 204, 178) 90%,
    white 100%
  );
  margin-right: 1px;
  position: relative;
  width: 22px;
  height: 22px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 3px;
}

.cancle--btn:hover {
  filter: brightness(120%);
}
.cancle--btn::before {
  content: "";
  position: absolute;
  left: 9px;
  top: 2px;
  transform: rotate(45deg);
  height: 16px;
  width: 2px;
  background-color: white;
}
.cancle--btn::after {
  content: "";
  position: absolute;
  left: 9px;
  top: 2px;
  transform: rotate(-45deg);
  height: 16px;
  width: 2px;
  background-color: white;
}
.confirm--btn {
  width: 80px;
  height: 22px;
  display: flex;
  border: 1px solid black;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: black -1px -1px 1px inset;
}
</style>
