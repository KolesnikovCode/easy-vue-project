<template>
  <router-link class="product" :to="{ name: 'Product', params: {id: product.id}}">
    <div class="product-content">
      <div class="product-content-img">
        <img :src="product.image" alt="">
      </div>
      <div class="product-content-name">{{ product.title }}</div>
      <div class="product-content-price">{{ product.price }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style lang="scss" scoped>
.product {
  text-decoration: none;
  color: #000;
  box-sizing: border-box;
  width: 280px;
  &-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    transition: all .2s ease;
    &:hover {
      transform: scale(1.015);
    }
    &-img {
      width: 180px;
      height: 260px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    &-name {
      padding-top: 5px;
      font-weight: 700;
    }
    &-price {
      padding-top: 5px;
      font-weight: 700;
    }
  }
}
</style>
