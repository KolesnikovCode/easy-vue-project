<template>
  <div id="app" v-if="!isLoaded">
    <Loader />
  </div>
  <div v-else>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import 'normalize.css';
import firebase from 'firebase';
import Header from './components/core/Header';
import Loader from './components/core/Loader';

export default {
  components: {
    Header,
    Loader
  },
  methods: {
    checkUser() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$store.commit('SET_USER', user);
          this.$store.commit('SET_IS_LOADED', true);
        } else {
          console.log('no user');
          this.$store.commit('SET_IS_LOADED', true);
        }
      });
    }
  },
  computed: {
    ...mapState({
      isLoaded: state => state.Common.isLoaded
    })
  },
  created() {
    this.checkUser();
  }
}
</script>

<style lang="scss">
@import './assets/font/gilroy.scss';

#app {
  font-family: 'Gilroy';
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
}

// animation
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
