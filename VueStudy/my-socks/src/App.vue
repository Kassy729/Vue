<template>
  <div id="app">
    <ProductPage></ProductPage>
    <Comment></Comment>
  </div>
</template>

<script>
import ProductPage from './components/ProductPage.vue'
import Comment from './components/Comment.vue'

export default {
  name: 'App',
  components: {
    ProductPage,
    Comment
  }
}
</script>

<style>
@import './assets/css/styles.css'
</style>
