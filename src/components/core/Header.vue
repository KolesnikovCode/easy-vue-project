<template>
    <div class="header">
        <div class="container">
            <div class="header-content">
                <router-link to="/" class="logo">EASY</router-link>
                <nav>
                    <router-link to="/">Главная</router-link>
                    <router-link to="/catalog">Каталог</router-link>
                    <router-link class="cabinet-link" to="/cabinet" v-if="user">
                        <span>Кабинет</span>
                        <div class="user" :title="`${user.name} ${user.surname}`">
                            <img :src="user.photo" alt="">
                        </div>
                    </router-link>
                    <div class="sign-btn" @click="signIn" v-if="!user">Войти через google</div>
                </nav>
                <div class="burger" @click="isOpenMobileMenu = !isOpenMobileMenu">|||</div>
                <div :class="isOpenMobileMenu ? 'mobile-menu opened' : 'mobile-menu'" v-click-outside="closeMobileMenu">
                    <router-link to="/" @click.native="isOpenMobileMenu = false">Главная</router-link>
                    <router-link to="/catalog" @click.native="isOpenMobileMenu = false">Каталог</router-link>
                    <router-link class="cabinet-link" to="/cabinet" v-if="user" @click.native="isOpenMobileMenu = false">
                      <span>Кабинет</span>
                    </router-link>
                    <div class="sign-btn" @click="signIn" v-if="!user">Войти через google</div>
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
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #000;
  color: #fff;
  user-select: none;
  z-index: 48;
  opacity: .4;
  transition: all .2s ease;
  &:hover {
    opacity: 1;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
  .logo {
      text-decoration: none;
      color: #fff;
      letter-spacing: 5px;
      font-weight: bold;
      transition: all .2s ease;
      &:hover {
          letter-spacing: 10px;
      }
  }
  nav {
      display: flex;
      align-items: center;
      @media screen and (max-width: 500px) {
        display: none;
      }
      a {
          padding: 3px 0;
          text-decoration: none;
          color: #fff;
          letter-spacing: 3px;
          font-size: 13px;
          text-transform: uppercase;
          font-weight: normal;
          transition: all .2s ease;
          display: flex;
          align-items: center;
          &:hover {
              color: #ffd666;
          }
          &:not(:last-child) {
              margin-right: 10px;
          }
      }
      .router-link-exact-active {
          color: #ffbb00;
          pointer-events: none;
          &:hover {
              color: #ffbb00;
          }
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
    .sign-btn {
      color: #fff;
      letter-spacing: 3px;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: normal;
      transition: all .2s ease;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: #ffd666;
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
