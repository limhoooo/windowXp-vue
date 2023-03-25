
<template>
  <div class="window">
    <IconList />
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
  },
});
</script>

<style scoped>
</style>
