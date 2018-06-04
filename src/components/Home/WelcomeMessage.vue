<template>
  <div>
    <div class="demo-container">
      <div class="col-left">
        <h2>Custom web component test</h2>
    <z-product-card class="product-grid-item"  v-for="product in products" :product="procesProduct(product)"  v-on:productLiked="onProductLiked"></z-product-card>
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
    procesProduct (product) {
      return JSON.stringify(product)
    },
    onProductLiked(evt) {
      const liked = evt.detail ? JSON.parse(evt.detail ): {};
      this.$store.commit('addLike', liked)
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
