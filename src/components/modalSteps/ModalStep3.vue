
<template>
  <div class="modal-step">
    <div class="btns">
      <button class="btn" type="button" @click.once="chosePartyStyle">на вечеринку</button>
      <button class="btn" type="button" @click.once="choseOfficeStyle">в офис</button>
      <button class="btn" type="button" @click.once="choseEveryDayStyle">на каждый день</button>
      <button class="btn" type="button" @click.once="choseAnyStyle">на любой случай</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    chosePartyStyle() {
      this.$store.commit('SET_PARTY_STYLE');
      this.goToCatalog();
    },
    choseOfficeStyle() {
      this.$store.commit('SET_OFFICE_STYLE');
      this.goToCatalog();
    },
    choseEveryDayStyle() {
      this.$store.commit('SET_EVERYDAY_STYLE');
      this.goToCatalog();
    },
    choseAnyStyle() {
      this.$store.commit('SET_ANY_STYLE');
      this.goToCatalog();
    },
    goToCatalog() {
      this.$store.commit('SET_IS_LOADED', false);
      setTimeout(() => {
        this.$store.commit('SET_IS_LOADED', true);
        this.$router.push('/catalog');
      }, 2000);
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
      width: 230px;
      height: 80px;
    }
  }
}
</style>
