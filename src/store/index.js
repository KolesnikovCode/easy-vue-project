import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: [
      {
        id: 0,
        title: 'Магазины',
        idOpened: true,
        options: [
          {
            id: 0,
            title: 'Zara',
            checked: false
          },
          {
            id: 1,
            title: 'H&M',
            checked: false
          },
          {
            id: 2,
            title: 'Pyaterochka',
            checked: false
          }
        ]
      },
      {
        id: 1,
        title: 'Стиль',
        idOpened: true,
        options: [
          {
            id: 0,
            title: 'Modern',
            checked: false
          },
          {
            id: 1,
            title: 'Denim',
            checked: false
          },
          {
            id: 2,
            title: 'Aki loh',
            checked: false
          }
        ]
      },
      {
        id: 2,
        title: 'Гендер',
        idOpened: true,
        options: [
          {
            id: 0,
            title: 'Мужской',
            checked: false
          },
          {
            id: 1,
            title: 'Женский',
            checked: false
          },
          {
            id: 2,
            title: 'Современный / неограниченный',
            checked: false
          }
        ]
      },
    ]
  },
  mutations: {
    toggleOpenFilter: (state, filterIndex) => {
      const filter = state.filters[filterIndex];
      filter.idOpened = !filter.idOpened;
      console.log(filter);
    }
  },
  actions: {
  },
  modules: {
  }
})
