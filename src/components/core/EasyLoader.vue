<template>
  <div class="loader-wrapper">
    <div class="lds-facebook">
      <div>e</div>
      <div>a</div>
      <div>s</div>
      <div>y</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
  z-index: 500;
}

.lds-facebook {
  display: inline-block;
  position: relative;
    width: 80px;
  height: 80px;
  font-family: 'Gilroy';
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 22px;
  background: linear-gradient(#C400C8, #57F5FF);
  color: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
.lds-facebook div:nth-child(4) {
  left: 80px;
  animation-delay: 0.12s;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
</style>
