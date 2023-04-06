import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import _ from "lodash";

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
