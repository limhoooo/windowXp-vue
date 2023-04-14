<template>
  <div>
    <WidonwLoading v-show="isWindowLoading" />
    <Window v-show="!isWindowLoading" />
    <teleport to="#errorModal" v-if="isErrorModal">
      <ErrorModal />
    </teleport>
  </div>
</template>
<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
import { errorModalStore } from "./store/errorModalStore";
export default defineComponent({
  components: {
    Window: defineAsyncComponent(() => import("./views/Window.vue")),
    ErrorModal: defineAsyncComponent(
      () => import("./components/UI/errorModal/ErrorModal.vue")
    ),
    WidonwLoading: defineAsyncComponent(
      () => import("./views/WindowLoading.vue")
    ),
  },
  setup() {
    const isWindowLoading = ref(true);
    const store = errorModalStore();
    const isErrorModal = computed(() => store.IS_ERROR_MODAL);
    document.addEventListener("keydown", function (event) {
      if (event.keyCode == 122) {
        event.preventDefault();
        store.IS_ERROR_MODAL = "APP 우측상단의 전체화면 버튼을 사용해주세요.";
      }
    });
    const onCreated = () => {
      setTimeout(() => {
        isWindowLoading.value = false;
      }, 3000);
    };
    onCreated();
    return {
      isWindowLoading,
      isErrorModal,
    };
  },
});
</script>
