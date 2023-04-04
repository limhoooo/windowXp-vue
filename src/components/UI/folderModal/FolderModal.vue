<template>
  <div
    class="folderModal"
    :style="{ 'z-index': ZINDEX }"
    @click="onClickZindexHandler"
  >
    <FolderModalHead :ICON="ICON" @close="$emit('close')" />
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
    zIndex: Number,
  },
  setup(props) {
    const store = folderModalStore();
    const ZINDEX_PROPS = computed(() => props.zIndex);
    const ZINDEX = ref(0);
    const onClickZindexHandler = () => {
      ZINDEX.value = ZINDEX_PROPS.value + store.ZINDEX + 1;
      store.ZINDEX = ZINDEX.value;
    };

    // props.zIndex update
    watch(
      () => props.zIndex,
      (cur) => {
        ZINDEX.value = cur;
      }
    );
    const onCreated = () => {
      ZINDEX.value = store.ZINDEX;
    };
    onCreated();
    return {
      ZINDEX,
      onClickZindexHandler,
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
  background-color: rgb(8, 49, 217);
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: 200px;
}
</style>
