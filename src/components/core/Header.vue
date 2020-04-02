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
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import firebase from 'firebase';

export default {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
    background: #000;
    color: #fff;
    user-select: none;
    &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
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
}
</style>
