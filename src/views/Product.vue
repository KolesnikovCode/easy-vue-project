<template>
  <div class="product-page">
    <div class="container">

      <div class="product-page-content" v-if="product">

        <div class="product-page-content-image">
          <slick
            :options="slickOptions"
          >
            <img :src="product.image" alt="image">
            <img :src="product.image" alt="image">
            <img :src="product.image" alt="image">
          </slick>
        </div>

        <div class="product-page-content-side">
          <h2>{{ product.title }}</h2>

          <h3>Описание</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi vitae quos ullam eum quam distinctio numquam illo. Ducimus maxime, hic illo voluptates dolorum atque possimus officia eligendi minus eos tempore voluptatem earum. Aut, modi at facilis quam laudantium ea?
          </p>

          <div class="product-page-content-side-styles">
            <span v-for="(style, index) in product.styles" :key="index">{{ style }}</span>
          </div>

          <div class="product-page-content-side-price">Цена: {{ product.price }}</div>

          <div class="product-page-content-side-actions">
            <button class="to-cart">В корзину</button>
            <button class="to-cart" @click="isFavoriteProduct = !isFavoriteProduct">
              <span v-if="!isFavoriteProduct">В избранное</span>
              <span v-else>В избранном</span>
              <v-icon name="star" v-if="!isFavoriteProduct" />
              <v-icon name="x" v-else />
            </button>
          </div>

        </div>

      </div>

      <div v-else>
        <h2>Продукт не найден :(</h2>
      </div>

      <SimilarProducts
        :products="similarProducts"
      />

    </div>

  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import { mapState } from 'vuex';
import SimilarProducts from '../components/core/SimilarProducts';

export default {
  data() {
    return {
      isFavoriteProduct: false,
      slickOptions: {
        slidesToShow: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    }
  },
  computed: {
    ...mapState({
      products: state => state.ProductsModule.products
    }),
    product() {
      return this.products.find(product => product.id === Number(this.$route.params.id));
    },
    similarProducts() {
      return this.products.filter(prd => prd.styles.some(stl => this.product.styles.some(s => s === stl)) && prd !== this.product);
    }
  },
  components: {
    Slick,
    SimilarProducts
  }
}
</script>

<style lang="scss" scoped>
.product {
  &-page {
    padding-top: 60px;
    &-content {
      padding: 30px 0;
      display: grid;
      grid-template-columns: 400px 1fr;
      width: 100%;
      &-image {
        width: 100%;
      }
      &-side {
        padding-left: 30px;
        h2 {
          margin: 0;
        }
        h3 {
          margin: 0;
          margin-top: 20px;
        }
        p {
          margin: 10px 0;
          font-size: 20px;
          font-weight: 500;
        }
        &-styles {
          display: flex;
          flex-wrap: wrap;
          margin: -4px;
          span {
            margin: 4px;
            padding: 3px 6px;
            background: rgb(38, 74, 233);
            border-radius: 3px;
            color: #fff;
            user-select: none;
          }
        }
        &-price {
          padding-top: 20px;
          font-weight: bold;
          font-size: 20px;
        }
        &-actions {
          padding-top: 20px;
          margin: -5px;
          display: flex;
          button {
            margin: 5px;
            cursor: pointer;
            background: #000;
            border: none;
            padding: 10px 20px;
            color: #fff;
            outline: none;
            transition: all .2s ease;
            display: flex;
            align-items: center;
            &:hover {
              opacity: .7;
            }
            &:active {
              opacity: .9;
            }
            svg {
              margin-left: 5px;
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
