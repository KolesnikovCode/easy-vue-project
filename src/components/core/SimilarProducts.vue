<template>
  <div class="similar">
    <h2>Похожие товары</h2>
    <div class="container">
      <div class="similar-wrapper">
        <div class="similar-product" v-for="(product, index) in products" :key="index">
          <SimilarProductCard
            :product="product"
            @click.native="scrollToTop"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimilarProductCard from './SimilarProductCard';

export default {
  props: {
    products: Array
  },
  components: {
    SimilarProductCard
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="scss">
.similar {
  padding: 30px 0;
  h2 {
    margin: 0;
    text-align: center;
  }
  &-wrapper {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &-product {
    margin: 10px;
  }
}
</style>
