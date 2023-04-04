<template>
  <div :class="iconClass">
    <Icon v-for="icon in ICON_LIST" :key="icon" :icon="icon" :type="type" />
  </div>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Icon: defineAsyncComponent(() => import("@/components/UI/Icon.vue")),
  },
  props: {
    ICON_LIST: Array,
    type: String,
  },
  setup(props) {
    const typeValue = computed(() => props.type);
    const iconClass = computed(() => {
      return typeValue.value === "folder"
        ? "icon__folder__containar"
        : "icon__containar";
    });
    return {
      iconClass,
    };
  },
});
</script>

<style scope>
.icon__containar {
  padding: 30px 0 0 30px;
  width: 155px;
  display: flex;
  flex-wrap: wrap;
}
.icon__folder__containar {
  padding: 20px 0 0 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
