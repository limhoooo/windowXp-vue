<template>
  <div class="icon__containar">
    <Icon v-for="icon in ICON_LIST" :key="icon" :icon="icon">
      {{ icon.name }}
    </Icon>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Icon: defineAsyncComponent(() => import("@/components/UI/Icon.vue")),
  },
  setup() {
    const moveGithub = () => {
      window.open("https://github.com/limhoooo", "_blank");
    };
    const openFolder = () => {};
    const ICON_LIST = ref([
      {
        src: new URL(`@/assets/images/computer.png`, import.meta.url).href,
        alt: "computer icon",
        name: "내컴퓨터",
        onDbClick: moveGithub,
      },
      {
        src: new URL(`@/assets/images/folder.png`, import.meta.url).href,
        alt: "folder icon",
        name: "포트폴리오",
        onDbClick: openFolder,
      },
      {
        src: new URL(`@/assets/images/github_logo.png`, import.meta.url).href,
        alt: "gitHub icon",
        name: "gitHub",
        onDbClick: moveGithub,
      },
    ]);

    return {
      ICON_LIST,
    };
  },
});
</script>

<style scope>
.icon__containar {
  padding: 30px 0 0 30px;
  width: 155px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
