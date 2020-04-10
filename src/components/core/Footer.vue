<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">

        <div class="footer-nav">

          <div class="footer-nav-logo">
            <router-link to="/">
              <img src="@/assets/footer/footer-logo.svg" alt="">
            </router-link>
          </div>

          <div class="footer-nav-links">
            <router-link to="#">О нас</router-link>
            <router-link to="#">Вакансии</router-link>
            <router-link to="#">FAQ</router-link>
            <router-link to="#">Разработчикам</router-link>
            <router-link to="#">Связаться с нами</router-link>
          </div>

        </div>

        <div class="footer-social">

        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.footer {
  background: #000;
  font-family: 'Gilroy';
  font-weight: 500;
  font-size: 15px;
  width: 100%;
  padding: 60px 0;
  &-container {
    max-width: 1700px;
    padding: 0 15px;
    margin: 0 auto;
  }
  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-nav {
    display: flex;
    flex-direction: column;
    &-logo {
      transition: all .2s ease;
      &:hover {
        transform: scale(1.03);
      }
    }
    &-links {
      display: flex;
      flex-direction: column;
      a {
        color: #fff;
        text-decoration: none;
        transition: all .2s ease;
        &:not(:first-child) {
          margin-top: 8px;
        }
        &:hover {
          opacity: .7;
        }
        &:active {
          opacity: .5;
        }
      }
    }
  }
  &-social {

  }
}
</style>