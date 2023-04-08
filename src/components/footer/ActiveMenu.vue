<template>
  <div
    class="footer--menu"
    :class="{ active: isActive }"
    @click="activeHandler"
  >
    <img :src="data.src" alt="icon" />
    <span>
      {{ data.name }}
    </span>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { folderModalStore } from "../../store/folderModalStore";
import { iconType } from "@/src/types/iconType";
export default {
  props: {
    data: Object,
  },
  setup(props) {
    const store = folderModalStore();
    const modalValue = computed(() => props.data as iconType);
    const activeModalId = computed(() => store.ACTIVE_MODAL_ID);
    const isActive = computed(
      () => modalValue.value.id === activeModalId.value
    );
    const activeHandler = () => {
      store.ACTIVE_MODAL_ID = modalValue.value.id;
    };
    return {
      isActive,
      activeHandler,
    };
  },
};
</script>

<style scope>
.footer--menu img {
  width: 15px;
  margin-right: 3px;
}
.footer--menu {
  flex: 1 1 0%;
  max-width: 150px;
  color: rgb(255, 255, 255);
  border-radius: 2px;
  margin-top: 3px;
  padding: 0px 8px;
  height: 25px;
  font-size: 11px;
  background-color: rgb(60, 129, 243);
  box-shadow: rgba(0, 0, 0, 0.3) -1px 0px inset,
    rgba(255, 255, 255, 0.2) 1px 1px 1px inset;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.footer--menu:hover {
  background-color: rgb(53, 118, 243);
}
.footer--menu.active {
  background-color: rgb(30, 82, 183);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset,
    rgba(0, 0, 0, 0.7) 1px 0px 1px inset;
}
</style>
