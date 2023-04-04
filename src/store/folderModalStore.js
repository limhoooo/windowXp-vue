import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import _ from "lodash";

export const folderModalStore = defineStore("folderModalStore", () => {
  // const folderModal = reactive({
  //   zIndex: 0,
  //   activeModal: [],
  // });
  const ACTIVE_MODAL = ref([]);
  const ZINDEX = ref(0);

  return {
    ACTIVE_MODAL,
    ZINDEX,
  };
});
