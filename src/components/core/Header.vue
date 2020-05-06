<template>
    <div class="header" v-click-outside="closeMobileMenu">
        <div class="container">
            <div class="header-content">
                <router-link to="/" class="logo">
                  <img src="@/assets/header/logo.svg" alt="">
                </router-link>
                <nav>
                    <router-link to="/">Главная</router-link>
                    <router-link to="/catalog">Каталог</router-link>
                    <div class="splitter">|</div>
                    <router-link class="cabinet-link" to="/cabinet" v-if="user">
                        <span>Кабинет</span>
                        <div class="user" :title="`${user.name} ${user.surname}`">
                            <img :src="user.photo" alt="">
                        </div>
                    </router-link>
                    <div class="sign-btn" @click="signIn" v-if="!user">Войти</div>
                </nav>
                <div class="burger" @click="toggleMobileMenu">|||</div>
                <div :class="isOpenMobileMenu ? 'mobile-menu opened' : 'mobile-menu'">
                    <router-link to="/" @click.native="isOpenMobileMenu = false">Главная</router-link>
                    <router-link to="/catalog" @click.native="isOpenMobileMenu = false">Каталог</router-link>
                    <router-link class="cabinet-link" to="/cabinet" v-if="user" @click.native="isOpenMobileMenu = false">
                      <span>Кабинет</span>
                    </router-link>
                    <div class="sign-btn" @click="signIn" v-if="!user">Войти</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import firebase from 'firebase';
import vClickOutside from 'v-click-outside'

export default {
  data() {
    return {
      isOpenMobileMenu: false
    }
  },
  computed: {
    ...mapState({
      user: state => state.User.user,
    })
  },
  methods: {
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(res => {
        console.log(res);
      })
    },
    toggleMobileMenu() {
      if (this.isOpenMobileMenu) {
        this.isOpenMobileMenu = false;
        return;
      }
      this.isOpenMobileMenu = true;
    },
    closeMobileMenu() {
      if (this.isOpenMobileMenu) {
        this.isOpenMobileMenu = false;
      }
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-family: 'Gilroy';
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  color: #fff;
  user-select: none;
  z-index: 48;
  transition: all .2s ease;
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
  .logo {
      transition: all .2s ease;
      img {
        height: 32px;
        margin-top: 6px;
      }
  }
  nav {
      margin-top: -6px;
      display: flex;
      align-items: center;
      text-transform: lowercase;
      font-weight: normal;
      font-size: 19px;
      @media screen and (max-width: 500px) {
        display: none;
      }
      a {
          padding: 3px 0;
          text-decoration: none;
          color: #fff;
          letter-spacing: 3px;
          transition: all .2s ease;
          display: flex;
          opacity: .7;
          align-items: center;
          &:hover {
              opacity: 1;
          }
          &:not(:last-child) {
              margin-right: 10px;
          }
      }
      .router-link-exact-active {
        transform: scale(1.1);
        opacity: 1;
        pointer-events: none;
      }
      .cabinet-link {
          .user {
              display: flex;
              align-items: center;
              transition: all .2s ease;
              img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  margin-left: 5px;
              }
          }
          &:hover {
              .user {
                  opacity: .7;
              }
          }
      }
      .splitter {
        margin-right: 10px;
      }
    .sign-btn {
      color: #fff;
      text-transform: lowercase;
      font-weight: normal;
      font-size: 19px;
      transition: all .2s ease;
      letter-spacing: 3px;
      display: flex;
      align-items: center;
      opacity: .7;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  .burger {
    transform: rotate(90deg);
    font-size: 20px;
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }
  .mobile-menu {
    box-sizing: border-box;
    position: fixed;
    width: 50%;
    height: 100%;
    top: 50px;
    right: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    padding-left: 30px;
    display: none;
    transform: translateX(100%);
    transition: all .5s ease;
    font-size: 17px;
    @media screen and (max-width: 500px) {
      display: flex;
    }
    a {
      color: #fff;
      text-decoration: none;
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
    .router-link-exact-active {
      color: #ffbb00;
      pointer-events: none;
      &:hover {
        color: #ffbb00;
      }
    }
    .sign-btn {
      margin-top: 8px;
    }
  }
  .opened {
    transform: translateX(0);
  }
}
</style>
