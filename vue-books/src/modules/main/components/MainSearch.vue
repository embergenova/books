<template>
    <div class="main-search"> 
        <div class="container">
            <h1>Welcome.</h1>
             <p> What are you looking for at the library? </p>
            <input type="text" @change="searchBooks" v-model="search" placeholder="Search...">
         </div>        
    </div>
</template>

<script>

export default {
    data() {
        return {
            search: this.$store.getters.getSearch
        }
    },
    computed:{
        getLimit(){
            return this.$store.getters.getLimit
        }
    },
    methods: {
        searchBooks() {
            if (this.search.length > 0) {
                this.$store.commit('SET_SEARCH', this.search)
                console.log(this.search);
                this.$store.dispatch('SearchBooks', this.search);
            }else {
                this.$store.dispatch('fetchBooks',1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/main.scss';
</style>