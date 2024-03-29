<template>
  <div
    class="folderModal"
    :class="{ active: isActive, maxSize: isMaxSize }"
    @click="onClickZindexHandler"
    :tabindex="isActive ? '1' : '0'"
    @blur="focusOut"
    ref="folderModal"
    v-show="!isUnActiveModal"
  >
    <div ref="folderModalHaeder">
      <FolderModalHead
        :ICON="ICON"
        :isMaxSize="isMaxSize"
        @close="$emit('close')"
        @maxSize="maxSizeFnc"
        :isActive="isActive"
      />
    </div>
    <FolderModalBody
      v-if="iconValue.type === 'folder'"
      :ICON_LIST="ICON_LIST"
    />
    <NotePadModal v-if="iconValue.type === 'notepad'" />
  </div>
</template>
<script lang="ts">
import { iconType } from "@/src/types/iconType";
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  onMounted,
  ref,
} from "vue";
import { folderModalStore } from "../../../store/folderModalStore.js";

export default defineComponent({
  components: {
    FolderModalHead: defineAsyncComponent(
      () => import("./FolderModalHead.vue")
    ),
    FolderModalBody: defineAsyncComponent(
      () => import("./FolderModalBody.vue")
    ),
    NotePadModal: defineAsyncComponent(() => import("./NotePadModal.vue")),
  },
  props: {
    ICON: Object,
    ICON_LIST: Array,
  },
  setup(props) {
    const store = folderModalStore();
    const iconValue = computed(() => props.ICON as iconType);
    const activeModalId = computed(() => store.ACTIVE_MODAL_ID as number);
    const isUnActiveModal = computed(() =>
      store.UNACTIVE_MODAL.find((item) => item === iconValue.value.id)
    );
    const isActive = computed(() => iconValue.value.id === activeModalId.value);
    const isMaxSize = ref(false);
    const folderModal = ref<any>(null);
    const folderModalHaeder = ref<any>(null);
    const onClickZindexHandler = () => {
      store.ACTIVE_MODAL_ID = iconValue.value.id;
    };
    const focusOut = () => {
      store.ACTIVE_MODAL_ID = 0;
    };
    const maxSizeFnc = () => {
      isMaxSize.value = !isMaxSize.value;
    };

    const dragElement = (elmnt: HTMLElement) => {
      let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      const dragMouseDown = (e: MouseEvent) => {
        onClickZindexHandler();
        e = e || window.event;
        e.preventDefault();
        // 헤더 시작지점 마우스좌표 얻기
        pos3 = e.clientX;
        pos4 = e.clientY;
        // 폴더 Max Size 시엔 작동 X
        if (isMaxSize.value) return;
        document.onmouseup = closeDragElement;
        // 이동지점 마우스좌표 얻기
        document.onmousemove = elementDrag;
      };

      const elementDrag = (e: MouseEvent) => {
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

    onMounted(() => {
      dragElement(folderModal.value);
    });

    return {
      isActive,
      iconValue,
      onClickZindexHandler,
      focusOut,
      folderModal,
      folderModalHaeder,
      isUnActiveModal,
      maxSizeFnc,
      isMaxSize,
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
  z-index: 1;
}
.folderModal.active {
  background-color: rgb(8, 49, 217);
  z-index: 2;
}
.folderModal.maxSize {
  width: 100%;
  height: 100%;
  top: 0 !important;
  left: 0 !important;
}
</style>
