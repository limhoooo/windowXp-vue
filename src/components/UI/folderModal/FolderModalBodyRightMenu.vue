<template>
  <div class="folderModal__body--content--right">
    <IconList :ICON_LIST="ICON_LIST" :type="'folder'" />
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    IconList: defineAsyncComponent(() =>
      import("../../windowIcons/IconList.vue")
    ),
  },
  props: {
    ICON_LIST: Array,
  },
});
{
}
</script>

<style scoped>
.folderModal__body--content--right {
  height: 100%;
  overflow: auto;
  background-color: rgb(255, 255, 255);
  flex: 1 1 0%;
}
</style>
