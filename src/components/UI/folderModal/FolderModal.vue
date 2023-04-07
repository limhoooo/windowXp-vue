<template>
  <div
    class="folderModal"
    :class="{ active: isActive }"
    @click="onClickZindexHandler"
    :tabindex="isActive ? '1' : '0'"
    @blur="focusOut"
    ref="folderModal"
  >
    <div ref="folderModalHaeder">
      <FolderModalHead
        :ICON="ICON"
        @close="$emit('close')"
        @hide="$emit('hide')"
        :isActive="isActive"
      />
    </div>
    <FolderModalBody :ICON_LIST="ICON_LIST" />
  </div>
</template>
<script>
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  onMounted,
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
    const folderModal = ref(null);
    const folderModalHaeder = ref(null);
    const onClickZindexHandler = () => {
      store.ACTIVE_MODAL_ID = iconValue.value.id;
    };
    const focusOut = () => {
      store.ACTIVE_MODAL_ID = "";
    };
    // https://homzzang.com/b/js-1938
    const dragElement = (elmnt) => {
      let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      const dragMouseDown = (e) => {
        onClickZindexHandler();
        e = e || window.event;
        e.preventDefault();
        // 헤더 시작지점 마우스좌표 얻기
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // 이동지점 마우스좌표 얻기
        document.onmousemove = elementDrag;
      };

      const elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();

        // 헤더 드래그 이동지점 커서좌표 계산
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // 요소의 새 위치 설정
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      };

      const closeDragElement = () => {
        /* 마우스버튼 풀렸을 때, 이동 멈춤 */
        document.onmouseup = null;
        document.onmousemove = null;
      };

      // 이동 목적지
      folderModalHaeder.value.onmousedown = dragMouseDown;
    };

    const onCreated = () => {
      // ZINDEX.value = store.ZINDEX;
    };
    onCreated();
    onMounted(() => {
      dragElement(folderModal.value);
    });

    return {
      ZINDEX,
      isActive,
      iconValue,
      onClickZindexHandler,
      focusOut,
      folderModal,
      folderModalHaeder,
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
  position: fixed;
  padding: 3px;
  background-color: rgb(101, 130, 245);
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  z-index: 0;
}
.folderModal.active {
  background-color: rgb(8, 49, 217);
  z-index: 1;
}
</style>
