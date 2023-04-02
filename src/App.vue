<template>
  <div class="window">
    <IconList />
    <FolderModal />
    <Footer />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  components: {
    IconList: defineAsyncComponent(() =>
      import("./components/windowIcons/IconList.vue")
    ),
    Footer: defineAsyncComponent(() =>
      import("./components/footer/Footer.vue")
    ),
    FolderModal: defineAsyncComponent(() =>
      import("./components/UI/folderModal/FolderModal.vue")
    ),
  },
});
</script>

<style scoped></style>
