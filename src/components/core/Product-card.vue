<template>
  <router-link class="product" :to="{ name: 'Product', params: {id: id}}">
    <div class="product-title">{{ title }}</div>
    <div class="product-image">
      <img :src="image" alt="product-photo">
    </div>
    <div class="product-styles">
      <div class="product-styles-style" v-for="(style, index) in styles" :key="index">
        {{ style }}
      </div>
    </div>
    <div class="product-genders">
      <div class="product-genders-designation"><small>Гендер:</small></div>
      <div class="product-genders-gender" v-for="(gender, index) in genders" :key="index">
        {{ gender }}
      </div>
    </div>
    <div class="product-price">{{ price }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    image: String,
    styles: Array,
    magazine: String,
    genders: Array,
    price: String
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  margin: 10px;
  transition: all .2s ease;
  cursor: pointer;
  width: 180px;
  text-decoration: none;
  color: #000;
  &:hover {
    transform: scale(1.015);
  }
  &-title {
    font-size: 14px;
  }
  &-image {
    display: flex;
    justify-content: center;
    padding-top: 5px;
    img {
      height: 250px;
      width: 180px;
    }
  }
  &-styles {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
    padding-top: 10px;
    &-style {
      padding: 2px 5px;
      user-select: none;
      border-radius: 5px;
      background: #a9ddff;
      margin: 5px;
      text-transform: capitalize;
    }
  }
  &-genders {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
    padding-top: 10px;
    align-items: center;
    &-gender {
      user-select: none;
      margin: 5px;
      text-transform: capitalize;
    }
  }
  &-price {
    padding-top: 15px;
    font-weight: bold;
  }
}
</style>