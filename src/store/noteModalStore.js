import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "../api";

export const noteModalStore = defineStore("noteModalStore", () => {
  const IS_NOTEPAD_UPDATE = ref(false);
  const GET_NOTEPAD = async () => {
    try {
      const { data } = await API.get("/notepad.json");
      return data["-NSP7H9U-toJuaVbu0cu"];
    } catch (error) {
      console.log(error);
    }
  };
  const PUT_NOTEPAD = async (text) => {
    try {
      await API.put("/notepad.json", { "-NSP7H9U-toJuaVbu0cu": text });
      return true;
    } catch (error) {
      console.log(error);
    }
  };
  return { PUT_NOTEPAD, GET_NOTEPAD, IS_NOTEPAD_UPDATE };
});
