<template>
  <div class="footer">
    <div class="footer--left__Box">
      <StartMenu />
      <ActiveMenu
        v-for="modal in activeModalList"
        :key="modal.id"
        :data="modal"
      />
    </div>
    <WidowClack />
  </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
import { folderModalStore } from "../../store/folderModalStore";

export default defineComponent({
  components: {
    StartMenu: defineAsyncComponent(() => import("./StartMenu.vue")),
    ActiveMenu: defineAsyncComponent(() => import("./ActiveMenu.vue")),
    WidowClack: defineAsyncComponent(() => import("./WidowClack.vue")),
  },
  setup() {
    const store = folderModalStore();
    const activeModalList = computed(() => store.ACTIVE_MODAL);
    return {
      activeModalList,
    };
  },
});
</script>

<style scope>
.footer {
  height: 30px;
  background: linear-gradient(
    rgb(31, 47, 134) 0px,
    rgb(49, 101, 196) 3%,
    rgb(54, 130, 229) 6%,
    rgb(68, 144, 230) 10%,
    rgb(56, 131, 229) 12%,
    rgb(43, 113, 224) 15%,
    rgb(38, 99, 218) 18%,
    rgb(35, 91, 214) 20%,
    rgb(34, 88, 213) 23%,
    rgb(33, 87, 214) 38%,
    rgb(36, 93, 219) 54%,
    rgb(37, 98, 223) 86%,
    rgb(36, 95, 220) 89%,
    rgb(33, 88, 212) 92%,
    rgb(29, 78, 192) 95%,
    rgb(25, 65, 165) 98%
  );
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  z-index: 99;
}
.footer--left__Box {
  width: 100%;
  display: flex;
}
</style>
