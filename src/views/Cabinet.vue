<template>
    <div class="header">
        <div class="container">
          <div class="cabinet">
            
            <div class="user">

              <div class="user-photo">
                <img :src="user.photo" alt="">
              </div>

              <div class="user-name">
                {{ user.name }} {{ user.surname }}
              </div>

            </div>

          </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            user: state => state.User.user
        })
    }
}
</script>

<style lang="scss" scoped>
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
  }
}
</style>
