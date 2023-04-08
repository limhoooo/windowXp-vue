<template>
  <div>
    <div
      class="icon__box"
      :class="{ activeClass: isActive }"
      @click="onClickIcon"
      @dblclick="ondbClickIcon"
      @blur="onBlurIcon"
      :tabindex="tabIndex"
    >
      <img :src="iconValue.src" :alt="iconValue.alt" />
      <p :class="iconClass">{{ iconValue.name }}</p>
    </div>
    <Modal
      v-if="iconValue.type !== 'link' && isModal"
      :ICON_LIST="iconValue.icons"
      :ICON="icon"
      @close="closeModal"
      @hide="hideModal"
    />
  </div>
</template>
<script lang="ts">
import { iconType } from "@/src/types/iconType";
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  PropType,
  ref,
} from "vue";
import { folderModalStore } from "../../store/folderModalStore";
export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import("./folderModal/Modal.vue")),
  },
  props: {
    icon: Object as PropType<iconType>,
    type: String,
  },
  setup(props) {
    const store: any = folderModalStore();
    const iconValue = computed(() => props.icon as iconType);
    const typeValue = computed(() => props.type);
    const isModal = ref(false);
    const isActive = ref(false);
    const tabIndex = ref(0);
    const iconClass = computed(() =>
      typeValue.value === "folder" ? "icon__folder--name" : "icon--name"
    );
    const onClickIcon = () => {
      isActive.value = true;
      tabIndex.value = 1;
    };
    const ondbClickIcon = () => {
      if (iconValue.value.type === "link") {
        if (iconValue.value.onMoveLink) iconValue.value.onMoveLink();
      } else {
        isModal.value = true;
        store.ACTIVE_MODAL_ID = iconValue.value.id;
        const findFolder = store.ACTIVE_MODAL.find(
          (item: iconType) => item.id === iconValue.value.id
        );
        if (!findFolder)
          store.ACTIVE_MODAL = [...store.ACTIVE_MODAL, iconValue.value];
      }
      isActive.value = false;
    };

    const onBlurIcon = () => {
      isActive.value = false;
      tabIndex.value = 0;
    };
    const closeModal = () => {
      isModal.value = false;
      store.ACTIVE_MODAL_ID = "";
      store.ACTIVE_MODAL = store.ACTIVE_MODAL.filter(
        (item: iconType) => item.id !== iconValue.value.id
      );
    };
    const hideModal = () => {
      console.log("aaa");
      isModal.value = false;
    };
    return {
      iconValue,
      isActive,
      tabIndex,
      isModal,
      iconClass,
      onClickIcon,
      ondbClickIcon,
      onBlurIcon,
      closeModal,
      hideModal,
    };
  },
});
</script>

<style scoped>
.icon__box {
  width: 70px;
  margin-bottom: 30px;
  text-align: center;
}
.icon__box img {
  width: 42px;
}
.icon--name {
  width: 100%;
  font-size: 12px;
  color: white;
  text-shadow: black 0px 1px 1px;
  display: flex;
  justify-content: center;
}
.icon__folder--name {
  width: 100%;
  font-size: 12px;
  display: flex;
  justify-content: center;
}
.activeClass {
  filter: drop-shadow(blue 0px 0px);
}
.activeClass img {
  opacity: 0.5;
}
.activeClass .icon--name {
  background-color: rgb(11, 97, 255);
}
</style>
