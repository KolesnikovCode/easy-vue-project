<template>
  <div class="modal-step">
    <div class="btns">
      <button class="btn" type="button" @click.once="choseMale">мужское</button>
      <button class="btn" type="button" @click.once="choseFemale">женское</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    choseMale() {
      this.$store.commit('SET_GENDER_MALE');
      this.goToNextStep();
    },
    choseFemale() {
      this.$store.commit('SET_GENDER_FEMALE');
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
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }
  .btn {
    width: 240px;
    height: 180px;
    border-radius: 43px;
    background: rgba(255, 255, 255, 0.3);
    // backdrop-filter: blur(90px);
    border: none;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    outline: none;
    transition: all .2s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
    &:active {
      background: rgba(255, 255, 255, 0.5);
    }
    &:first-child {
      margin-right: 100px;
      @media screen and (max-width: 500px) {
        margin-right: 0;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
