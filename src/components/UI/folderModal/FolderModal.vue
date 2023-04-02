<template>
  <div class="folderModal">
    <FolderModalHead />
    <FolderModalBody />
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    FolderModalHead: defineAsyncComponent(() =>
      import("./FolderModalHead.vue")
    ),
    FolderModalBody: defineAsyncComponent(() =>
      import("./FolderModalBody.vue")
    ),
  },
  setup() {
    return {};
  },
});
{
}
</script>

<style scoped>
.folderModal {
  width: 896px;
  height: 562px;
  z-index: 19;
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
