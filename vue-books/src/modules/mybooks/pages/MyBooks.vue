<template>
  <div class="mybooks">
    <div class="container">
      <h2>My Books</h2>
      <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="image in images" :key="image.id">
    <img :src="image.url" />
  </Slide>
    <template #addons>
    </template>
  </Carousel>
    <div class="mybooks-wrapper">
      <div class="mybooks-card" v-for="item of getMyBooks" :key="item">
        <img :src="item.image_url" alt="">
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <button   @click="mybooksAction('deleteMyBooks',item.id)">x</button>
      </div>
    </div>
    </div>
  </div>
</template>
  
  <script>
  import { defineComponent } from 'vue'
import { Carousel,  Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
  export default defineComponent({
    name: 'Autoplay',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      images: [
        {id: 1,url:`https://systemplus.ie/wp-content/uploads/2019/11/PHOTO-2019-11-08-16-35-101-1200x700.jpg`}, 
        {id: 2,url:`https://brightsparks.com.sg/magazine/july-2021/img/feature/nlb/nlb-masthead.jpg`}, 
        {id: 3,url:`https://brightsparks.com.sg/magazine/february-2022/img/feature/nlb/nlb-masthead.jpg`}]
    }
  },
    computed: {
      getMyBooks() {
        return this.$store.getters.getMyBooks
      }
    },
    methods:{
      mybooksAction(type,id){
        this.$store.dispatch(type,id) 
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
  @import '../../../assets/css/mybooks.scss';
</style>