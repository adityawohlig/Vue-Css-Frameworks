<template>
  <div>
  <base-carousel />
    <div class="card my-3 mx-auto" style="width: 18rem;">
  <img class="card-img-top" src="https://vuesax.com/foto2.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
</template>

<script>
import BaseCarousel from '../components/BaseCarousel.vue'
  // import HelloWorld from '../components/HelloWorld'

  export default {
  components: { BaseCarousel },
    name: 'Home',

    // components: {
      // HelloWorld,
    // },
  }
</script>
