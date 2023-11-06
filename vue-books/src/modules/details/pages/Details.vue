<template>
    <div class="details">
      <div class="container">
        <div class="details-books">
          <div class="details-books-left">
                <img :src="`${getDetails.image_url}`" alt="img">
         </div>
         <div class="details-books-right">
            <h1>{{getDetails.title }}</h1>
            <h4>Authors: {{getDetails.authors}}</h4>
            <h4>Genres:{{ getDetails.genres}}</h4>
            <h4>Num pages :{{ getDetails.num_pages}}</h4>
            <h4>Rating:{{ getDetails.rating}}</h4>
            <p>{{ getDetails.description }}</p>
            <button @click="addToMyBooks" class="add add-1">Add to My Books</button>
         </div>
       </div>

       <div class="details-block">
            <h3 class="details-block-title" >Отзывы</h3>
          <div class="details-block-card">
           <div class="details-block-top">
            <div class="details-block-top-img">
                  <img src="../../../assets/img/q4.jpg"  alt="">
                 </div>
                <h3>Nick Mark</h3>
           </div>
                <p class="details-block-text">{{ getDetails.Quote1}}</p>
           </div>
           <div class="details-block-card">
           <div class="details-block-top">
                 <div class="details-block-top-img">
                  <img src="../../../assets/img/q6.jpg"  alt="">
                 </div>
                <h3>Shannon Adam</h3>
           </div>
                <p class="details-block-text">{{ getDetails.Quote2}}</p>
           </div>
           <div class="details-block-card">
           <div class="details-block-top">
            <div class="details-block-top-img">
                  <img src="../../../assets/img/q5.jpg"  alt="">
                 </div>
                <h3>Jeff Tyler</h3>
           </div>
                <p class="details-block-text">{{ getDetails.Quote3}}</p>
           </div>
         </div>
      </div>
    </div>
    </template>
    
    <script>
    export default {
     created(){
            this.$store.dispatch('fetchDetails', this.$route.query.id)
        },
    computed:{
            getDetails(){
                return this.$store.getters.getDetails
            },
            getMyBooks(){
                return this.$store.getters.getMyBooks
            }
        },
      methods:{
           addToMyBooks(){
                 this.$store.dispatch('addToMyBooks',this.getDetails)
                       }
            }
    }
    </script>
    <style lang="scss" scoped>
    @import '../../../assets/css/details.scss';
    </style>