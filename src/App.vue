
<template>
  <div class="window">
    <IconList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  components: {
    IconList: defineAsyncComponent(() =>
      import("./components/windowIcons/IconList.vue")
    ),
  },
});
</script>

<style scoped>
</style>
