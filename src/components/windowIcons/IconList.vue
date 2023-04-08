<template>
  <div :class="iconClass">
    <IconComponent
      v-for="icon in ICON_LIST"
      :key="icon"
      :icon="icon"
      :type="type"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  PropType,
  ref,
} from "vue";
import { iconType } from "../../types/iconType";
export default defineComponent({
  components: {
    IconComponent: defineAsyncComponent(() => import("../UI/Icon.vue")),
  },
  props: {
    ICON_LIST: Array as PropType<iconType[]>,
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
