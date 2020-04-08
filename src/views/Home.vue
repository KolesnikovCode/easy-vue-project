<template>
  <div class="home">
    <div class="container">
      <div class="home-center">
        <div class="home-center-logo animated fadeIn">
          <img src="../assets/main/logo.svg" alt="">
        </div>
        <div class="home-center-btn animated fadeInLeft">
          <button type="button" @click="toggleModal">начать</button>
        </div>
        <div class="home-center-description animated fadeInRight">
          easy - меняться, легко!
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <Modal v-if="isModalOpen">
        <div class="modal-content">
          <transition name="fade" mode="out-in">
            <ModalStep1 v-if="step === 1" key="step"/>
            <ModalStep2 v-if="step === 2" key="step"/>
            <ModalStep3 v-if="step === 3" key="step"/>
          </transition>
        </div>
      </Modal>
    </transition>

  </div>
</template>

<script>
import 'animate.css';
import { mapState } from 'vuex';
import Modal from '../components/core/Modal';

import ModalStep1 from '../components/modalSteps/ModalStep1';
import ModalStep2 from '../components/modalSteps/ModalStep2';
import ModalStep3 from '../components/modalSteps/ModalStep3';

export default {
  components: {
    Modal,
    ModalStep1,
    ModalStep2,
    ModalStep3
  },
  methods: {
    toggleModal() {
      this.$store.commit('TOGGLE_MODAL');
    }
  },
  computed: {
    ...mapState({
      isModalOpen: state => state.Modal.isModalOpen,
      step: state => state.GeneralForm.step
    })
  }
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100vw;
  min-height: 550px;
  max-height: 100vh;
  background: url('../assets/main/main-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  font-family: 'Gilroy';
  .container {
    height: 100%;
  }
  &-center {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    &-logo {
      width: 600px;
      @media screen and (max-width: 500px) {
        margin-top: -60px;
      }
      img {
        width: 100%;
      }
      @media screen and (max-width: 670px) {
        width: 100%;
      }
    }
    &-btn {
      button {
        background: rgba(255, 255, 255, 0.10);
        backdrop-filter: blur(2px);
        outline: none;
        border: none;
        color: #fff;
        width: 230px;
        height: 60px;
        cursor: pointer;
        font-size: 45px;
        border-radius: 40px;
        transition: all .2s ease;
        margin-top: 15px;
        &:hover {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(3px);
        }
        &:active {
          background: rgba(255, 255, 255, 0.20);
          backdrop-filter: blur(4px);
        }
        @media screen and (max-width: 500px) {
          margin-top: 30px;
        }
      }
    }
    &-description {
      position: absolute;
      max-width: 450px;
      min-width: 280px;
      text-align: center;
      color: #fff;
      font-weight: 500;
      font-size: 20px;
      bottom: 40px;
      @media screen and (max-width: 500px) {
        bottom: 85px;
      }
    }
  }
  .modal-content {
    h3 {
      letter-spacing: 3px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
