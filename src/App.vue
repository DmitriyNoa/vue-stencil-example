<template>
    <router-view />
</template>

<style lang="stylus" scoped>

.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px

</style>


<style>
  .product-grid-item {
    float: left;
    margin: 10px;
  }
  .col-left {
    float: left;
    width: 80%;
  }
  .col-right {
    float: left;
    width: 20%;
  }
  .liked-products {
    padding: 0px 10px;
    margin: 0;
    list-style: none;
  }
  .liked-products li {
    margin: 0 0 10px 0;
  }
  .liked-products li img {
    width: 100%;
  }
</style>