<template>
  <div class="startmenu--right">
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
import { ref } from "vue";
import { errorModalStore } from "../../store/errorModalStore";

export default {
  setup() {
    const iconList = ref([
      {
        name: "내 문서",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/documents_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "내 최근 문서",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/recent_documents_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "내 그림",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/pictures_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "내 음악",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/music_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "내 컴퓨터",
        subName: "",
        src: new URL(`@/assets/images/computer.png`, import.meta.url).href,
      },
      {
        name: "제어판",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/panel_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "기본 프로그램 설정",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/defaults_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "프린터 및 팩스",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/faxes_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "도움말 및 지원",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/support_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "검색",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/search_icon.png`,
          import.meta.url
        ).href,
      },
      {
        name: "실행",
        subName: "",
        src: new URL(
          `@/assets/images/startFooter/run_icon.png`,
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
};
</script>

<style scope>
.startmenu--right {
  background-color: rgb(203, 227, 255);
  border-left: 1px solid rgba(58, 58, 255, 0.37);
  padding: 6px 5px 5px;
  width: 190px;
  color: rgb(0, 19, 107);
}
.startmenu--right .menu__item {
  height: 27px;
  padding: 1px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 4px;
}
.startmenu--right .menu__item:hover {
  color: white;
  background-color: rgb(47, 113, 205);
}
.startmenu--right .menu__item:hover .menu__item__subtext {
  color: white;
}
.startmenu--right .menu__item__img {
  margin-right: 3px;
  width: 20px;
  height: 20px;
}
.startmenu--right .menu__item__texts {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
  position: relative;
  font-size: 11px;
}
.startmenu--right .menu__item__texts .menu__item__text {
  font-weight: 700;
}
.startmenu--right .menu__item__texts .menu__item__subtext {
  color: rgba(0, 0, 0, 0.6);
  line-height: 12px;
  margin-bottom: 1px;
}
</style>
