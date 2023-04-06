<template>
  <div
    class="folderModal"
    :class="{ active: isActive }"
    @click="onClickZindexHandler"
    :tabindex="isActive ? '1' : '0'"
    @blur="focusOut"
  >
    <FolderModalHead
      :ICON="ICON"
      @close="$emit('close')"
      :isActive="isActive"
    />
    <FolderModalBody :ICON_LIST="ICON_LIST" />
  </div>
</template>
<script>
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  ref,
  watch,
} from "vue";
import { folderModalStore } from "../../../store/folderModalStore.js";

export default defineComponent({
  components: {
    FolderModalHead: defineAsyncComponent(() =>
      import("./FolderModalHead.vue")
    ),
    FolderModalBody: defineAsyncComponent(() =>
      import("./FolderModalBody.vue")
    ),
  },
  props: {
    ICON: Object,
    ICON_LIST: Array,
  },
  setup(props) {
    const store = folderModalStore();
    const iconValue = computed(() => props.ICON);
    const activeModalId = computed(() => store.ACTIVE_MODAL_ID);
    const isActive = computed(() => iconValue.value.id === activeModalId.value);
    const ZINDEX = ref(0);
    const onClickZindexHandler = () => {
      store.ACTIVE_MODAL_ID = iconValue.value.id;
    };
    const focusOut = () => {
      store.ACTIVE_MODAL_ID = "";
    };
    const onCreated = () => {
      // ZINDEX.value = store.ZINDEX;
    };
    onCreated();
    return {
      ZINDEX,
      isActive,
      iconValue,
      onClickZindexHandler,
      focusOut,
    };
  },
});
{
}
</script>

<style scoped>
.folderModal {
  width: 896px;
  height: 562px;
  cursor: auto;
  display: flex;
  position: absolute;
  padding: 3px;
  background-color: rgb(101, 130, 245);
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: 200px;
  z-index: 0;
}
.folderModal.active {
  background-color: rgb(8, 49, 217);
  z-index: 1;
}
</style>
