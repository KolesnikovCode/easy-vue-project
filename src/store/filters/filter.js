export default {
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
            title: 'Street',
            checked: false
          },
          {
            id: 3,
            title: 'Aki loh',
            checked: false
          },
          {
            id: 4,
            title: 'Johny Dep',
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
            title: 'Унисекс',
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
    },
    SET_GENDER_MALE: (state) => {
      // male
      state.filters[2].options[0].checked = true;
      // female
      state.filters[2].options[1].checked = false;
      // unisex
      state.filters[2].options[2].checked = false;
    },
    SET_GENDER_FEMALE: (state) => {
      // male
      state.filters[2].options[0].checked = false;
      // female
      state.filters[2].options[1].checked = true;
      // unisex
      state.filters[2].options[2].checked = false;
    },
    SET_PARTY_STYLE: (state) => {
      // modern
      state.filters[1].options[0].checked = true;
      // denim
      state.filters[1].options[1].checked = false;
      // street
      state.filters[1].options[2].checked = false;
      // aki loh
      state.filters[1].options[3].checked = false;
      // johny dep
      state.filters[1].options[4].checked = false;
    },
    SET_OFFICE_STYLE: (state) => {
      // modern
      state.filters[1].options[0].checked = false;
      // denim
      state.filters[1].options[1].checked = true;
      // street
      state.filters[1].options[2].checked = false;
      // aki loh
      state.filters[1].options[3].checked = false;
      // johny dep
      state.filters[1].options[4].checked = true;
    },
    SET_EVERYDAY_STYLE: (state) => {
      // modern
      state.filters[1].options[0].checked = false;
      // denim
      state.filters[1].options[1].checked = true;
      // street
      state.filters[1].options[2].checked = true;
      // aki loh
      state.filters[1].options[3].checked = false;
      // johny dep
      state.filters[1].options[4].checked = true;
    },
    SET_ANY_STYLE: (state) => {
      // modern
      state.filters[1].options[0].checked = true;
      // denim
      state.filters[1].options[1].checked = true;
      // street
      state.filters[1].options[2].checked = true;
      // aki loh
      state.filters[1].options[3].checked = true;
      // johny dep
      state.filters[1].options[4].checked = true;
    }
  },
  actions: {
  },
};
