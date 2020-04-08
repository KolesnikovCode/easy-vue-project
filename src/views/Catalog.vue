<template>
  <div class="container">
    <h1>Каталог</h1>
    <div class="configurator">
      <div class="configurator-filters">

        <div class="filter" v-for="(filter, index) in filters" :key="filter.id">

          <div class="filter-header" @click="toggleOpenFilter(index)">
            {{ filter.title }}
          </div>

          <div class="filter-body" :class="filter.idOpened ? '' : 'filter-body-closed'">
            <label v-for="option in filter.options" :key="option.id">
              <input type="checkbox" v-model="option.checked">
              <span>{{ option.title }}</span>
            </label>
          </div>

        </div>

      </div>
      <div class="configurator-content">
        <div class="products" v-if="filteredProducts.length > 0">
          <ProductCard
            v-for="(product, index) in filteredProducts" :key="index"
            :title="product.title"
            :image="product.image"
            :styles="product.styles"
            :price="product.price"
            :genders="product.gender"
          />
        </div>
        <p class="not-found" v-else>Ничего не найдено! ;(<br>Попробуйте изменить фильтр.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '../components/core/Product-card';

export default {
  methods: {
    toggleOpenFilter(filterIndex) {
      this.$store.commit('toggleOpenFilter', filterIndex);
    },
    magazineFilter(products, filters) {
      const magazineFilters = filters.find(flrt => flrt.title === 'Магазины').options;
      const magazineCheckedOptions = magazineFilters.filter(flrt => flrt.checked);
      const activeMagazineOptions = magazineCheckedOptions.map(opt => opt.title.toLowerCase());

      const filteredGenderProducts = products.filter(product => {
        return activeMagazineOptions.some(opt => {
          return opt == product.magazine.toLowerCase();
        });
      });
      const res = activeMagazineOptions.length ? filteredGenderProducts : products;

      return {
        products: res,
        filters
      }
    },
    stylesFilter({ products, filters }) {
      const stylesFilters = filters.find(flrt => flrt.title === 'Стиль').options;
      const stylesCheckedOptions = stylesFilters.filter(flrt => flrt.checked);
      const activeStylesOptions = stylesCheckedOptions.map(opt => opt.title.toLowerCase());

      const filteredStylesProducts = products.filter(prod => {
        return activeStylesOptions.some(opt => prod.styles.some(style => style.toLowerCase() === opt));
      });
      
      const res = activeStylesOptions.length ? filteredStylesProducts : products;

      return {
        products: res,
        filters
      }
    },
    genderFilter({ products, filters }) {
      const genderFilters = filters.find(flrt => flrt.title === 'Гендер').options;
      const genderCheckedOptions = genderFilters.filter(flrt => flrt.checked);
      const activeGenderOptions = genderCheckedOptions.map(opt => opt.title.toLowerCase());

      const filteredGenderProducts = products.filter(prod => {
        return activeGenderOptions.some(opt => prod.gender.some(gender => gender.toLowerCase() === opt));
      });

      const res = activeGenderOptions.length ? filteredGenderProducts : products;

      return res;
    }
  },
  computed: {
    ...mapState({
      filters: state => state.FiltersModule.filters,
      products: state => state.ProductsModule.products
    }),
    filteredProducts() {
      return this.genderFilter(this.stylesFilter(this.magazineFilter(this.products, this.filters)));
    }
  },
  components: {
    ProductCard
  }
}
</script>

<style lang="scss" scoped>
.configurator {
  display: grid;
  grid-template-columns: 240px 1fr;
  padding-top: 40px;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  &-filters {
    display: flex;
    flex-direction: column;
  }
  .filter {
    display: flex;
    flex-direction: column;
    &:not(:first-child) {
      padding-top: 10px;
    }
    &-header {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 0 10px;
      font-size: 17px;
      background: #dbdbdb;
      cursor: pointer;
      user-select: none;
      z-index: 10;
    }
    &-body {
      display: flex;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #dbdbdb;
      padding: 15px 0px 5px 0px;
      margin-top: -10px;
      border-radius: 5px;
      height: fit-content;
      max-height: 1000px;
      transition: all .2s linear;
      z-index: 9;
      label {
        padding: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        user-select: none;
        span {
          margin-left: 4px;
        }
        &:hover {
          background: #f7f7f7;
        }
      }
      &-closed {
        max-height: 0;
        overflow: hidden;
        padding: 0;
      }
    }
  }
  &-content {
    padding: 0 20px;
    @media screen and (max-width: 500px) {
      padding-top: 40px;
    }
    .products {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
      @media screen and (max-width: 500px) {
        justify-content: center;
      }
    }
    .not-found {
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
}
</style>
