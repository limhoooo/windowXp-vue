<template>
  <div
    class="icon__box"
    :class="{ activeClass: isActive }"
    @click="onClickIcon"
    @dblclick="ondbClickIcon"
    @blur="onBlurIcon"
    :tabindex="tabIndex"
  >
    <img :src="iconValue.src" :alt="iconValue.alt" />
    <p class="icon--name">{{ iconValue.name }}</p>
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    icon: Object,
  },
  setup(props) {
    const iconValue = computed(() => props.icon);
    const isActive = ref(false);
    const tabIndex = ref(0);
    const onClickIcon = () => {
      isActive.value = true;
      tabIndex.value = 1;
    };
    const ondbClickIcon = () => {
      iconValue.value.onDbClick();
      isActive.value = false;
    };
    const onBlurIcon = () => {
      isActive.value = false;
      tabIndex.value = 0;
    };

    return {
      iconValue,
      isActive,
      tabIndex,
      onClickIcon,
      ondbClickIcon,
      onBlurIcon,
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
.icon__box .icon--name {
  width: 100%;
  font-size: 12px;
  color: white;
  text-shadow: black 0px 1px 1px;
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
