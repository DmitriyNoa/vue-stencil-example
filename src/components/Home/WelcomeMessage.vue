<template>
  <div>
    <h3>Hello {{ name }} from my Vue.js page, built with Webpack 4!</h3>
    <h1>Product card</h1>
    <z-product-card product='{"name": "Test", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg", "price": {"old": 111, "current": 11111}, "brand": "asdasdasasd"}'></z-product-card>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
