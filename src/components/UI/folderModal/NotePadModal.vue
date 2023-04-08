<template>
  <div class="noteModal__body">
    <section class="noteModal__body--toolbar">
      <ul>
        <li>파일(F)</li>
        <li @click="onSave">저장(S)</li>
        <li>서식(Q)</li>
        <li>보기(V)</li>
        <li>도움말(H)</li>
      </ul>
    </section>
    <textarea
      v-model="notePadText"
      @keydown="onSaveText"
      @input="onChangeText"
    ></textarea>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { noteModalStore } from "../../../store/noteModalStore.js";

export default defineComponent({
  components: {},
  setup() {
    const store = noteModalStore();
    const notePadText = ref("");
    const onSaveText = (e: KeyboardEvent) => {
      if ((e.which == 115 || e.which == 83) && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        onSave();
      }
    };
    const onChangeText = () => {
      store.IS_NOTEPAD_UPDATE = true;
    };
    const onSave = () => {
      store.PUT_NOTEPAD(notePadText.value);
      store.IS_NOTEPAD_UPDATE = false;
    };
    const onCreated = async () => {
      notePadText.value = await store.GET_NOTEPAD();
    };
    onCreated();
    return { notePadText, onSaveText, onSave, onChangeText };
  },
});
{
}
</script>

<style scoped>
.noteModal__body {
  height: 100%;
  background: linear-gradient(
    to right,
    rgb(237, 237, 229) 0%,
    rgb(237, 232, 205) 100%
  );
  display: flex;
  flex-direction: column;
  -webkit-box-align: stretch;
  align-items: stretch;
  margin-top: 23px;
}
.noteModal__body .noteModal__body--toolbar {
  position: relative;
  height: 21px;
  flex-shrink: 0;
  border-bottom: 1px solid white;
}
.noteModal__body .noteModal__body--toolbar ul {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
}
.noteModal__body .noteModal__body--toolbar ul li {
  list-style: none;
  font-size: 11px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1px 7px 0 7px;
  cursor: context-menu;
}

.noteModal__body .noteModal__body--toolbar ul li:hover {
  background-color: rgb(22, 96, 232);
  color: rgb(255, 255, 255);
}
.noteModal__body textarea {
  flex: 1 1 auto;
  outline: none;
  font-family: "Lucida Console", monospace;
  font-size: 13px;
  line-height: 14px;
  resize: none;
  padding: 2px;
  white-space: nowrap;
  overflow: scroll;
  border: 1px solid rgb(150, 171, 255);
}
</style>
