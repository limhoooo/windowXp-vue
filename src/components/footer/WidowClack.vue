<template>
  <div class="widow--clack">{{ clack }}</div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const clack = ref("");
    const time = (date) =>
      date
        .toLocaleTimeString()
        .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    setInterval(() => {
      clack.value = time(new Date());
    }, 1000);
    const onCreated = () => {
      clack.value = time(new Date());
    };
    onCreated();
    return {
      clack,
    };
  },
});
</script>

<style scope>
.widow--clack {
  flex-shrink: 0;
  background: linear-gradient(
    rgb(12, 89, 185) 1%,
    rgb(19, 158, 233) 6%,
    rgb(24, 181, 242) 10%,
    rgb(19, 155, 235) 14%,
    rgb(18, 144, 232) 19%,
    rgb(13, 141, 234) 63%,
    rgb(13, 159, 241) 81%,
    rgb(15, 158, 237) 88%,
    rgb(17, 155, 233) 91%,
    rgb(19, 146, 226) 94%,
    rgb(19, 126, 215) 97%,
    rgb(9, 91, 201) 100%
  );
  border-left: 1px solid rgb(16, 66, 175);
  box-shadow: rgb(24, 187, 255) 1px 0px 1px inset;
  padding: 0px 16px;
  margin-left: 10px;
  padding-top: 7px;
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-weight: lighter;
  text-shadow: none;
}
</style>
