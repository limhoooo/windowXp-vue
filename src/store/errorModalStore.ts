import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "../api";

export const errorModalStore = defineStore("errorModalStore", () => {
  const IS_ERROR_MODAL = ref("");
  return { IS_ERROR_MODAL };
});
