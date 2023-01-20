<template>
  <div class="body-content">
      <b-container v-if="articles.length > 0">
        <div style="background-color: red; color: blue">
            {{ Search }} : {{ Filter }}
        </div>
        <SpaceCard 
          v-for=" (article, index) in articles"
          :key="index"
          :article="article"
          :card-style="true"
          :articleIndex="index"
          @openModal="openModal($event)"
          :is-loading="loading"
        />
        
        <div class="see-more" v-if="articles.length > 9">
            <b-overlay
              :show="loading"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="warning"
              class="d-inline-block"
            >
            <b-button class="loading-button" @click="moreContent()">
              Carregar mais
            </b-button>  
          </b-overlay>
        </div>
      </b-container>
      <b-container v-else-if="loading">
        <b-spinner style="width: 3rem; height: 3rem;" variant="warning"></b-spinner>
      </b-container>  
      <b-container v-else>
          <h2 class="no-data-message">
              Oops! Não temos dados ou eles não foram carregados.
          </h2>
      </b-container>
  </div>
</template>
<script>
import { getArticles } from '@/services'
import SpaceCard from '@/components/body/SpaceCard.vue'
import { mapGetters } from 'vuex'
export default {
  // eslint-disable-next-line
  name: 'Body',
  components:{
    SpaceCard
  },
  watch:{
  // eslint-disable-next-line
    Search: function (newVal){
      if(newVal){
        console.log(newVal);
        this.filters.searchTerm = newVal;
        this.handleData()
      }
    },
    
    Filter: function (newVal){
      if(newVal){
        this.filters.selectedOption = newVal;
        this.handleData()
      }
    },

  },
  data() {
    return {
      articles: {},
      articlesCounter: 10,
      searchStorage: '',
      filterStorage: 0,
      loading: false,
      contentLoading: false,
      filters: {
        searchTerm: '',
        selectedOption: 0,
      },
    }
  },
  computed: {
    ...mapGetters(['Filter', 'Search'])
  },
  methods:{
    async handleData(){
      this.loading = true
      if(localStorage.getItem('search')){
        this.searchStorage = localStorage.getItem('search')
      }
      if(localStorage.getItem('filter')){
        this.searchStorage = localStorage.getItem('filter')
      }
      let request = {
        counter: this.articlesCounter
      }
      if( this.filters.searchTerm){
        request.search = this.filters.searchTerm
      }
      if(this.filters.selectedOption){
        request.filter = this.filters.selectedOption
      }

      await getArticles(request).then((response) => {
        this.articles = response.data
        localStorage.removeItem('search')
        localStorage.removeItem('filter')
        this.$router.push({query: {search: request.search, filter: request.filter}})
        this.loading = false
      }).catch((error) => {
        console.log(error)
      })
    },
    moreContent(){
      this.articlesCounter += 10
      this.handleData()
    }
  },
  created(){
    if(this.$route.query){
      localStorage.setItem('search', this.$route.query.search)
      localStorage.setItem('filter', this.$route.query.filter)
    }
    this.handleData()
  }
}
</script>

<style lang="scss" scoped>
  .body-content {
    background-color: #1e2022;
    padding: 4rem;
    @media (max-width: 425px) {
      padding: 1rem;
    }

    .see-more{
      button{
          background-color: #d07017;
          color: #fff;
          border-color: #d07017;

          &:hover{
            background-color: #1e2022;
            color: #d07017;
            border-color: #1e2022;
          }
        }
    }

    .no-data-message{
      font-size: 30px;
      color: #fff
    }
}
</style>
