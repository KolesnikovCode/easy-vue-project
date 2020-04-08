
<template>
  <div class="modal-step">
    <div class="btns">
      <button class="btn" type="button" @click.once="choseSmall">для стройных</button>
      <button class="btn" type="button" @click.once="choseStandart">для средних</button>
      <button class="btn" type="button" @click.once="choseBig">для крупных</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    choseSmall() {
      this.goToNextStep();
    },
    choseStandart() {
      this.goToNextStep();
    },
    choseBig() {
      this.goToNextStep();
    },
    goToNextStep() {
      this.$store.commit('GO_TO_NEXT_STEP');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-step {
  font-family: Gilroy;
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    margin: -30px;
    flex-wrap: wrap;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }
  .btn {
    width: 240px;
    height: 180px;
    border-radius: 43px;
    background: rgba(255, 255, 255, 0.19);
    backdrop-filter: blur(90px);
    border: none;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    outline: none;
    transition: all .2s ease;
    margin: 30px;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    &:active {
      background: rgba(255, 255, 255, 0.4);
    }
    @media screen and (max-width: 500px) {
      width: 220px;
      height: 80px;
    }
  }
}
</style>
