<template>
  <div>
    <transition name="fade">
      <div id="app" v-if="!isLoaded">
        <EasyLoader />
      </div>
    </transition>
    <div id="app" v-if="isLoaded">
      <!-- <Header /> -->
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import 'normalize.css';
import firebase from 'firebase';
// import Header from './components/core/Header';
import EasyLoader from './components/core/EasyLoader';

export default {
  components: {
    // Header,
    EasyLoader
  },
  methods: {
    checkUser() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$store.commit('SET_USER', user);
          this.$store.commit('SET_IS_LOADED', true);
        } else {
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

html, body {
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  overflow-y: auto;
}

#app {
  font-family: 'Gilroy';
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 25px;
  width: 100%;
}

// animation
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
