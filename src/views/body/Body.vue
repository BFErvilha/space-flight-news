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
  data() {
    return {
      articles: {},
    }
  },
  methods:{
    async handleData(){
      await getArticles().then((response) => {
        this.articles = response.data
      })
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
  }
</style>
