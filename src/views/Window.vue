<template>
  <div class="window">
    <IconList :ICON_LIST="ICON_LIST" />
    <Footer />
    <button class="fullSizeBtn" @click="onClickFullsize">
      <img :src="fullscreen" alt="fullscreenIcon" />
    </button>
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from "vue";
import fullscreen from "../assets/images/fullscreen.png";
import { iconType } from "../types/iconType";
import iconsData from "../data/IconsData";
export default defineComponent({
  components: {
    IconList: defineAsyncComponent(
      () => import("../components/windowIcons/IconList.vue")
    ),
    Footer: defineAsyncComponent(
      () => import("../components/footer/Footer.vue")
    ),
  },
  setup() {
    const ICON_LIST = ref<iconType[]>(iconsData);
    const onClickFullsize = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    };
    return {
      ICON_LIST,
      fullscreen,
      onClickFullsize,
    };
  },
});
</script>

<style scoped>
.window {
  width: 100%;
  height: 100%;
}
.fullSizeBtn {
  position: absolute;
  right: 40px;
  top: 30px;
  background: none;
  border: none;
}
.fullSizeBtn img {
  width: 26px;
  filter: opacity(0.6);
  cursor: pointer;
}
</style>
