
<template>
  <div class="modal-step">
    <v-icon @click.native="goToPrevStep" class="go-back" name="chevron-left" />
    <!-- В цикле выводить подходящие луки с сервера -->
    <div class="photos">

      <div class="photo" v-for="(look, i) in looks" :key="look.id" @click="choseLook(i)">

        <img :src="look.src" alt="look">

      </div>

    </div>
  </div>
</template>

<script>
import img1 from '@/assets/filters/1.jpg';
import img2 from '@/assets/filters/2.jpg';
import img3 from '@/assets/filters/3.jpg';
import img4 from '@/assets/filters/4.jpg';

export default {
  data() {
    return {
      looks: [
        {
          id: 1,
          src: img1
        },
        {
          id: 2,
          src: img2
        },
        {
          id: 3,
          src: img3
        },
        {
          id: 4,
          src: img4
        }
      ]
    }
  },
  methods: {
    choseLook() {
      this.goToCatalog();
    },
    goToPrevStep() {
      this.$store.commit('GO_TO_BACK_STEP');
    },
    goToCatalog() {
      this.$store.commit('SET_IS_LOADED', false);
      this.$store.commit('TOGGLE_MODAL');
      this.$store.commit('GO_TO_FIRST_MODAL_STEP');
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
  position: relative;
  box-sizing: border-box;
  .go-back {
    position: absolute;
    width: 40px;
    height: 40px;
    left: -60px;
    top: calc(50% - 20px);
    color: #fff;
    opacity: .5;
    transition: all .2s ease;
    cursor: pointer;
    @media screen and (max-width: 1049px) {
      left: -10px;
    }
    @media screen and (max-width: 600px) {
      left: -30px;
    }
    &:hover {
      opacity: .7;
    }
    &:active {
      opacity: .9;
    }
  }
  .photos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: -30px;
    box-sizing: border-box;
    @media screen and (max-width: 600px) {
      margin: -20px;
    }
    .photo {
      box-sizing: border-box;
      width: 200px;
      margin: 30px;
      max-height: 316px;
      opacity: .9;
      transition: all .2s ease;
      border-radius: 40px;
      @media screen and (max-width: 600px) {
        width: 100px;
        margin: 20px;
      }
      @media screen and (max-width: 330px) {
        width: 95px;
      }
      img {
        width: 200px;
        max-height: 316px;
        box-sizing: border-box;
        border-radius: 40px;
        @media screen and (max-width: 600px) {
          width: 100px;
          border-radius: 25px;
        }
        @media screen and (max-width: 330px) {
          width: 95px;
        }
      }
      &:hover {
        opacity: 1;
        cursor: pointer;
        transform: scale(1.04);
      }
    }
  }
}
</style>
