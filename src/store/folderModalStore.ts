import { defineStore } from "pinia";
import { ref } from "vue";

export const folderModalStore = defineStore("folderModalStore", () => {
  const ACTIVE_MODAL = ref([]);
  const UNACTIVE_MODAL = ref<number[]>([]);
  const ACTIVE_MODAL_ID = ref(0);

  return {
    ACTIVE_MODAL,
    ACTIVE_MODAL_ID,
    UNACTIVE_MODAL,
  };
});
