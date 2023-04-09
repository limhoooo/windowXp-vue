<template>
  <div>
    <WidonwLoading v-show="isWindowLoading" />
    <Window v-show="!isWindowLoading" />
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Window: defineAsyncComponent(() => import("./views/Window.vue")),
    WidonwLoading: defineAsyncComponent(
      () => import("./views/WindowLoading.vue")
    ),
  },
  setup() {
    const isWindowLoading = ref(true);
    const onCreated = () => {
      setTimeout(() => {
        isWindowLoading.value = false;
      }, 3000);
    };
    onCreated();
    return {
      isWindowLoading,
    };
  },
});
</script>
