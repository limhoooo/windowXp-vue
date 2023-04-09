<template>
  <div class="loading__container">
    <div class="loading__container__section">
      <div>
        <img :src="logo" alt="widowXp_loading_icon" />
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/images/widowXp_loading_icon.png";
export default {
  setup() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.loading__container {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #012f9e;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading__container .loading__container__section {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #567dda;
  border-top: 1px solid #a1c1ff;
  border-bottom: 1px solid #a1c1ff;
}
.loading {
  text-align: center;
  margin-top: 50px;
}
.loading span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 50%; /* span을 동그랗게 */
  animation: loading 1s 0s linear infinite;
}
.loading span {
  background-color: #eee;
  margin-right: 8px;
}
.loading span:nth-child(1) {
  animation-delay: 0s;
}
.loading span:nth-child(2) {
  animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  animation-delay: 0.8s;
}
@keyframes loading {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>
