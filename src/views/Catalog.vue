<template>
  <div class="about">
    <div class="container">
      <h1 @click="foo">Каталог</h1>
      <div class="configurator">
        <div class="configurator-filters">

          <div class="filter" v-for="(filter, index) in filters" :key="filter.id">

            <div class="filter-header" @click="toggleFilter(index)">
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
            />
          </div>
          <p v-else>Ничего не найдено! ;(<br>Попробуйте изменить фильтр.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '../components/core/Product-card';

export default {
  methods: {
    toggleFilter(filterIndex) {
      this.$store.commit('toggleOpenFilter', filterIndex);
    },
    foo() {
      
    }
  },
  computed: {
    ...mapState({
      filters: state => state.FiltersModule.filters,
      products: state => state.ProductsModule.products
    }),
    filteredProducts() {
      // Находим опции фильтра по магазинам
      const magazineFilters = this.filters.find(flrt => flrt.title === 'Магазины').options;
      // Находим все активные опции в фильтре магазинов
      const magazineCheckedOptions = magazineFilters.filter(flrt => flrt.checked);
      // Получаем все названия активных фильтров магазинов в нижнем регистре
      const activeMagazineOptions = magazineCheckedOptions.map(opt => opt.title.toLowerCase());

      // Находим опции фильтра по стилям
      const stylesFilters = this.filters.find(flrt => flrt.title === 'Стиль').options;
      // Находим все активные опции в фильтре стилей
      const stylesCheckedOptions = stylesFilters.filter(flrt => flrt.checked);
      // Получаем все названия активных фильтров по стилям в нижнем регистре
      const activeStylesOptions = stylesCheckedOptions.map(opt => opt.title.toLowerCase());

      const filteredMagazineProducts = activeMagazineOptions.length ? this.products.filter(product => {
        return activeMagazineOptions.some(opt => {
          return opt == product.magazine.toLowerCase();
        });
      }) : this.products;

      const filteredStylesProducts = filteredMagazineProducts.filter(prod => {
        return activeStylesOptions.some(opt => prod.styles.some(style => style === opt));
      });

      if (activeStylesOptions.length) {
        return filteredStylesProducts;
      }

      if (!filteredStylesProducts.length) {
        return filteredMagazineProducts;
      }

      return filteredStylesProducts;
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
      background: #dbdbdb;
      cursor: pointer;
      user-select: none;
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
    .products {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }
  }
}
</style>
