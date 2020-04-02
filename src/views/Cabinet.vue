<template>
    <div class="header">
        <div class="container">
          <div class="cabinet">
            
            <div class="user">

              <div class="user-photo">
                <img :src="user.photo" alt="">
              </div>

              <div class="user-name">
                {{ user.name }}
              </div>

            </div>

            <button type="button" @click.prevent.once="signOut">Выйти</button>

          </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import firebase from 'firebase';

export default {
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$store.commit('UNSET_USER');
        this.$router.push('/')
      }).catch(function(error) {
        console.log(error);
      });
    }
  },
  computed: {
    ...mapState({
        user: state => state.User.user
    })
  }
}
</script>

<style lang="scss" scoped>
.cabinet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .user {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-photo {
      width: 150px;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    &-name {
      padding-top: 10px;
      font-weight: bold;
      text-align: center;
    }
  }
  button {
    margin-top: 10px;
    width: 150px;
    height: 42px;
    cursor: pointer;
  }
}
</style>
