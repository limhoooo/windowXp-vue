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
import { defineAsyncComponent, defineComponent, Ref, ref } from "vue";
import fullscreen from "../assets/images/fullscreen.png";
import { iconType } from "../types/iconType";
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
    const onClickFullsize = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    };
    const moveGithub = () =>
      window.open("https://github.com/limhoooo", "_blank");
    const moveYoutube = () =>
      window.open("https://limhoooo-react-youtube.netlify.app/", "_blank");
    const movetistory = () =>
      window.open("https://limhoooo.tistory.com/", "_blank");

    const ICON_LIST = ref<iconType[]>([
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/computer.png`, import.meta.url).href,
        alt: "computer icon",
        name: "내컴퓨터",
        type: "folder",
        icons: [
          {
            id: new Date().getTime() + Math.random(),
            src: new URL(`@/assets/images/tistory_icon.png`, import.meta.url)
              .href,
            alt: "tistory icon",
            name: "My Tistory",
            type: "link",
            onMoveLink: movetistory,
          },
          {
            id: new Date().getTime() + Math.random(),
            src: new URL(`@/assets/images/github_logo.png`, import.meta.url)
              .href,
            alt: "gitHub icon",
            name: "My GitHub",
            type: "link",
            onMoveLink: moveGithub,
          },
        ],
      },
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/folder.png`, import.meta.url).href,
        alt: "folder icon",
        name: "내 폴더",
        type: "folder",
      },
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/github_logo.png`, import.meta.url).href,
        alt: "gitHub icon",
        name: "GitHub",
        type: "link",
        onMoveLink: moveGithub,
      },
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/notepad.png`, import.meta.url).href,
        alt: "notepad icon",
        name: "메모장",
        type: "notepad",
      },
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/youtube-icon.png`, import.meta.url).href,
        alt: "youtube icon",
        name: "YouTube",
        type: "link",
        onMoveLink: moveYoutube,
      },
    ]);

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
