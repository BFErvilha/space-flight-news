<template>
  <div class="body-content">
      <b-container>
        <SpaceCard 
          v-for=" (article, index) in articles"
          :key="index"
          :article="article"
          :card-style="true"
          :articleIndex="index"
          @openModal="openModal($event)"
        />
        
        <div class="see-more">
            <b-overlay
              :show="loading"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="info"
              class="d-inline-block"
            >
            <b-button class="loading-button" @click="moreContent()">
              Carregar mais
            </b-button>  
          </b-overlay>
        </div>
      </b-container>
  </div>
</template>
<script>
import { getArticles } from '@/services'
import SpaceCard from '@/components/body/SpaceCard.vue'
export default {
  // eslint-disable-next-line
  name: 'Body',
  components:{
    SpaceCard
  },
  props: {
  // eslint-disable-next-line
    searchTerm: { type: String, required: false},
  },
  watch:{
  // eslint-disable-next-line
    searchTerm: function (newVal){
      if(newVal){
        this.handleData(newVal)
      }
    }
  },
  data() {
    return {
      articles: {},
      articlesCounter: 10,
      searchStorage: '',
      loading: false,
      contentLoading: false,
    }
  },
  methods:{
    async handleData(searchTerm = null){
      this.loading = true
      let request = {
        counter: this.articlesCounter
      }
      console.log(searchTerm)
      if( searchTerm || this.searchStorage ){
        request.search = searchTerm !== null ? searchTerm : this.searchStorage
      }
      await getArticles(request).then((response) => {
        this.articles = response.data
        this.searchStorage = request.search
        this.loading = false
      }).catch((error) => {
        console.log(error)
        // this.$bvToast.toast(`${is.toastCount}`, {
        //   title: 'BootstrapVue Toast',
        //   autoHideDelay: 5000,
        //   appendToast: append
        // })
      })
    },
    moreContent(){
      this.articlesCounter += 10
      console.log('bateu')
      this.handleData()
    }
  },
  created(){
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
}
</style>
