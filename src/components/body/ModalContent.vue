<template>
  <div>
    <b-row
        no-gutters
      >
        <b-col md="6">
          <div class="article-photo">
            <b-card-img :src="article.imageUrl" alt="Image" class="rounded-2"></b-card-img>
          </div>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              <h2 class="title">
                {{ article.title }}
              </h2>
              <div class="date-tag">
                <div class="date">{{ article.publishedAt | formatDate}}</div>
              </div>
              <p class="text">
                {{ article.summary }}
              </p>
              <div class="card-button text-center">
                <b-button @click="goToWebSite(article.url)">
                  Ir para o site
                </b-button>  
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>

  </div>
</template>
<script>
import { getArticleById } from '@/services'

export default {
  // eslint-disable-next-line
  name: 'ModalContent',
  props:{
    id: { type: Number, required: true}
  },
  data(){
    return { 
      article: []
    }
  },
  methods: {
    async getArticleInfo(id){
      await getArticleById(id).then((response) => {
        this.article = response.data
        console.log(response.data)
      })
    },
    goToWebSite(url){
      window.open(url, '_blank', 'noreferrer') 
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
    this.getArticleInfo(this.id)
  }
}
</script>
<style lang="scss" scoped>
      .article-photo{
        img{
          object-fit: cover;
          height: 300px;
        }
      }

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
</style>