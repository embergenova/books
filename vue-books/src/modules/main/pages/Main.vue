<template> 
  <div class="main">
    <MainSearch></MainSearch>
    <div class="container">
      <div class="main-wrapper" >
      <router-link :to="{path: `/details/${item.title}`, query:{id: item.id}}" class="main-card" v-for="item of getBooks"  :key="item.id">
        <img :src="`${item.image_url}`" alt="">
        <div class="main-card-title"><h3>{{item.title}}</h3> <span class="main-card-vote">{{item.rating}}</span></div>
        <div class="main-card-over">{{item.genres}}</div>
     </router-link>
    </div>
    <div class="main-paginate">
      <button @click="showMore" class="btn btn-1">ShowMore</button>
    </div>
    </div>
  </div>

</template> 
<script>
import MainSearch from '../components/MainSearch.vue';
export default {
  components:{
        MainSearch
       },
  created(){
          this.$store.dispatch('fetchBooks',this.getLimit)
    },
  computed:{
        getBooks(){
            return this.$store.getters.getBooks
        },
        getLimit(){
            return this.$store.getters.getLimit
        },
        getSearch(){
            return this.$store.getters.getSearch
        },

  },
  methods:{
    showMore(){
        this.$store.commit('SET_LIMIT')
        this.$store.dispatch('fetchBooks',this.getLimit)
      }
    }
   
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/main.scss';
</style>