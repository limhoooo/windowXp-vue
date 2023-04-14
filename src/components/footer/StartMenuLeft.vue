<template>
  <div class="startmenu--left">
    <div
      class="menu__item"
      v-for="(icon, index) in iconList"
      :key="index"
      @click="onClickEvent"
    >
      <img class="menu__item__img" :src="icon.src" alt="Internet" />
      <div class="menu__item__texts">
        <div class="menu__item__text">{{ icon.name }}</div>
        <div class="menu__item__subtext">{{ icon.subName }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { errorModalStore } from "../../store/errorModalStore";

export default defineComponent({
  setup() {
    const iconList = ref([
      {
        name: "인터넷",
        subName: "Internet Explorer",
        src: new URL(
          `@/assets/images/startFooter/internet_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "전자 메일",
        subName: "Outlook Express",
        src: new URL(
          `@/assets/images/startFooter/email_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "그림판",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/paint_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "Windows Media Player",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/player_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "Windows Messenger",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/messenger_icon.png`,
          import.meta.url
        ).href,
      },
    ]);
    const store = errorModalStore();

    const onClickEvent = () => {
      store.IS_ERROR_MODAL = "기능 준비중입니다.";
    };
    return {
      iconList,
      onClickEvent,
    };
  },
});
</script>

<style scope>
.startmenu--left {
  background-color: rgb(255, 255, 255);
  padding: 6px 5px 0px;
  width: 190px;
  display: flex;
  flex-direction: column;
}

.startmenu--left .menu__item {
  height: 34px;
  padding: 1px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 4px;
}
.startmenu--left .menu__item:hover {
  color: white;
  background-color: rgb(47, 113, 205);
}
.startmenu--left .menu__item:hover .menu__item__subtext {
  color: white;
}
.startmenu--left .menu__item__img {
  margin-right: 3px;
  width: 30px;
  height: 30px;
}
.startmenu--left .menu__item__texts {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
  position: relative;
  font-size: 12px;
}
.startmenu--left .menu__item__texts .menu__item__text {
  font-weight: 700;
}
.startmenu--left .menu__item__texts .menu__item__subtext {
  color: rgba(0, 0, 0, 0.6);
  line-height: 12px;
  margin-bottom: 1px;
}
</style>
