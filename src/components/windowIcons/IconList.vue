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
    const ICON_LIST = ref([
      {
        src: new URL(`@/assets/images/github_logo.png`, import.meta.url).href,
        alt: "gitHub icon",
        name: "gitHub",
      },
      {
        src: new URL(`@/assets/images/github_logo.png`, import.meta.url).href,
        alt: "gitHub icon",
        name: "gitHub",
      },
      {
        src: new URL(`@/assets/images/github_logo.png`, import.meta.url).href,
        alt: "gitHub icon",
        name: "gitHub",
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
}
</style>