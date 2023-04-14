<template>
  <div class="start__menu" @click="toogleMenu" tabindex="1" @blur="hideMenu">
    <div class="start__menu--box" v-if="isMenu">
      <header class="start__menu__header">
        <img :src="limhoIcon" alt="limho_icon" />
        <span>Limho</span>
      </header>
      <section class="start__menu__body">
        <StartMenuLeft />
        <StartMenuRight />
      </section>
      <footer class="start__menu__footer"></footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from "vue";
import limhoIcon from "../../assets/images/limho.jpg";
export default defineComponent({
  components: {
    StartMenuLeft: defineAsyncComponent(() => import("./StartMenuLeft.vue")),
    StartMenuRight: defineAsyncComponent(() => import("./StartMenuRight.vue")),
  },
  setup() {
    const isMenu = ref(false);
    const toogleMenu = () => {
      isMenu.value = !isMenu.value;
    };
    const hideMenu = () => {
      isMenu.value = false;
    };
    return {
      isMenu,
      toogleMenu,
      hideMenu,
      limhoIcon,
    };
  },
});
</script>

<style scope>
.start__menu {
  width: 96px;
  background-image: url("../../assets/images/start_icon.png");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  margin-right: 10px;
  z-index: 99;
}
.start__menu:hover {
  /* filter: brightness(105%); */
}
.start__menu--box {
  position: absolute;
  left: 0;
  bottom: 29px;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 4px 2px;
}
.start__menu__header {
  position: relative;
  align-self: flex-start;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  height: 54px;
  padding: 6px 5px 5px;
  box-sizing: border-box;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(
    rgb(24, 104, 206) 0%,
    rgb(14, 96, 203) 12%,
    rgb(14, 96, 203) 20%,
    rgb(17, 100, 207) 32%,
    rgb(22, 103, 207) 33%,
    rgb(27, 108, 211) 47%,
    rgb(30, 112, 217) 54%,
    rgb(36, 118, 220) 60%,
    rgb(41, 122, 224) 65%,
    rgb(52, 130, 227) 77%,
    rgb(55, 134, 229) 79%,
    rgb(66, 142, 233) 90%,
    rgb(71, 145, 235) 100%
  );
  overflow: hidden;
}
.start__menu__header > img {
  width: 25px;
  margin-right: 8px;
}
.start__menu__header > span {
  font-weight: bold;
  text-shadow: rgba(0, 0, 0, 0.7) 1px 1px;
}
.start__menu__body {
  width: 390px;
  height: 400px;
  background-color: #fff;
  display: flex;
}
.start__menu__footer {
  display: flex;
  align-self: flex-end;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  color: rgb(255, 255, 255);
  height: 36px;
  width: 100%;
  background: linear-gradient(
    rgb(66, 130, 214) 0%,
    rgb(59, 133, 224) 3%,
    rgb(65, 138, 227) 5%,
    rgb(65, 138, 227) 17%,
    rgb(60, 135, 226) 21%,
    rgb(55, 134, 228) 26%,
    rgb(52, 130, 227) 29%,
    rgb(46, 126, 225) 39%,
    rgb(35, 116, 223) 49%,
    rgb(32, 114, 219) 57%,
    rgb(25, 110, 219) 62%,
    rgb(23, 107, 216) 72%,
    rgb(20, 104, 213) 75%,
    rgb(17, 101, 210) 83%,
    rgb(15, 97, 203) 88%
  );
}
</style>
