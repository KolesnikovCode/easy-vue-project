import Vue from 'vue'
import Vuex from 'vuex'
import FiltersModule from './filters/filter';
import ProductsModule from './products/products';
import User from './user/user';
import Common from './common/common';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    FiltersModule,
    ProductsModule,
    User,
    Common
  }
})
