<template>
  <div class="body-content">
      <b-container>
        <b-card 
          v-for=" (article, index) in articles"
          :key="index"
          no-body 
          class="overflow-hidden article-card"
          >
          <b-row
            no-gutters
            :class="index % 2 != 0 ? 'reverse-row': ''"
          >
            <b-col md="6">
              <b-card-img :src="article.imageUrl" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text>
                  <h2 class="title">
                    {{ article.title }}
                  </h2>
                  <div class="date-tag">
                    <div class="date">{{ article.publishedAt | formatDate}}</div>
                    <div class="tag">{{ article.newsSite }}</div>
                  </div>
                  <p class="text">
                    {{ article.summary }}
                  </p>
                  <div class="card-button">
                      <b-button>
                        Ver Mais
                      </b-button>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-container>
  </div>
</template>
<script>
import { getArticles } from '@/services'
export default {
  // eslint-disable-next-line
  name: 'Body',
  data() {
    return {
      articles: {}
    }
  },
  methods:{
    async handleData(){
      await getArticles().then((response) => {
        // console.log(response.data)
        this.articles = response.data
      })
    }
  },
  filters:{
    formatDate(value){
      const date = new Date(value)
      let day  = date.getDate().toString()
      let month = (date.getMonth()+1).toString()
      let year = date.getFullYear();
      day = (day.length == 1) ? '0'+day : day
      month = (month.length == 1) ? '0'+month : month

      return `${day}/${month}/${year}`
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

    .article-card{
      max-width: 800px;
      width: 100%;
      margin: 20px auto;
      height: 350px;

      .reverse-row{
        flex-direction: row-reverse;
      }
      
      .title{
        font-size: 20px;
        font-family: 'Roboto Condensed';
        font-weight: bold;
        text-align: left;
      }

      .date-tag{
        display: flex;
        justify-content: space-between;
        margin: 5px auto;

        .date{
          font-size: 13px;
        }

        .tag{
          font-size: 10px;
          background-color: #302e53;
          color: #d07017;
          padding: 5px 10px;
          border: none;
          border-radius: .375rem

        }

      }
      .text{
        margin-top: 2rem;
        text-align: left;
      }

      .card-button{
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
  }
</style>
