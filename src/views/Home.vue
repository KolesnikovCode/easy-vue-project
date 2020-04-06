<template>
  <div class="home">
    <div class="container">
      <div class="home-center">
        <div class="home-center-logo animated fadeIn">
          <img src="../assets/main/logo.svg" alt="">
        </div>
        <div class="home-center-btn animated fadeInLeft">
          <button type="button">начать</button>
        </div>
        <div class="home-center-description animated fadeInRight">
          Вы находитесь на самой удобной платформе по подбору одежды!<br />
          easy - меняться, легко!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';

export default {

}
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100vw;
  min-height: 550px;
  max-height: 100vh;
  background: url('../assets/main/main-bg.png');
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
}
</style>
