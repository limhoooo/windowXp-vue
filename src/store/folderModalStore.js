import { defineStore } from "pinia";
import { ref } from "vue";

export const folderModalStore = defineStore("folderModalStore", () => {
  const ACTIVE_MODAL = ref([]);
  const ACTIVE_MODAL_ID = ref("");
  const ZINDEX = ref(0);

  return {
    ACTIVE_MODAL,
    ACTIVE_MODAL_ID,
    ZINDEX,
  };
});
