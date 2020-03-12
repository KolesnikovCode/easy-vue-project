<template>
  <div class="about">
    <div class="container">
      <h1>Каталог</h1>
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

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    toggleFilter(filterIndex) {
      this.$store.commit('toggleOpenFilter', filterIndex);
    }
  },
  computed: mapState({
    filters: state => state.filters,
  })
}
</script>

<style lang="scss" scoped>
.configurator {
  display: grid;
  grid-template-columns: 300px 1fr;
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
}
</style>
