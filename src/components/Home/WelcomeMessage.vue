<template>
  <div>
    <div class="demo-container">
      <div class="col-left">
        <h2>Custom web component test</h2>
    <z-product-card class="product-grid-item"  v-for="product in products" :product.prop="product"  v-on:productLiked="onProductLiked"></z-product-card>
      </div>
      <div class="col-right">
        <h2>Liked products</h2>
        <ul class="liked-products">
          <li  v-for="like in liked">
            <img v-bind:src="like.image"
                 alt="like.name">{{like.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {products} from '../../mocks/products';
  export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    onProductLiked(evt) {
      this.$store.commit('addLike', evt.detail)
    }
  },
  data() {
    return {
      products : products,
      liked: this.$store.getters.liked
    }
  }
}
</script>
