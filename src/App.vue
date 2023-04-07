<template>
  <div class="window">
    <IconList :ICON_LIST="ICON_LIST" />
    <Footer />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    IconList: defineAsyncComponent(() =>
      import("./components/windowIcons/IconList.vue")
    ),
    Footer: defineAsyncComponent(() =>
      import("./components/footer/Footer.vue")
    ),
  },
  setup() {
    const moveGithub = () => {
      window.open("https://github.com/limhoooo", "_blank");
    };
    const ICON_LIST = ref([
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/computer.png`, import.meta.url).href,
        alt: "computer icon",
        name: "내컴퓨터",
        type: "folder",
      },
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/folder.png`, import.meta.url).href,
        alt: "folder icon",
        name: "포트폴리오",
        type: "folder",
        icons: [
          {
            id: new Date().getTime() + Math.random(),
            src: new URL(`@/assets/images/computer.png`, import.meta.url).href,
            alt: "computer icon",
            name: "내컴퓨터",
            type: "folder",
          },
          {
            id: new Date().getTime() + Math.random(),
            src: new URL(`@/assets/images/folder.png`, import.meta.url).href,
            alt: "folder icon",
            name: "포트폴리오",
            type: "folder",
          },
          {
            id: new Date().getTime() + Math.random(),
            src: new URL(`@/assets/images/github_logo.png`, import.meta.url)
              .href,
            alt: "gitHub icon",
            name: "gitHub",
            type: "link",
            onMoveLink: moveGithub,
          },
        ],
      },
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/github_logo.png`, import.meta.url).href,
        alt: "gitHub icon",
        name: "gitHub",
        type: "link",
        onMoveLink: moveGithub,
      },
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/notepad.png`, import.meta.url).href,
        alt: "notepad icon",
        name: "메모장",
        type: "folder",
      },
    ]);

    return {
      ICON_LIST,
    };
  },
});
</script>

<style scoped></style>
