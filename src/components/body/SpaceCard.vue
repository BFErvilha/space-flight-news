<template>
  <div>
    <b-card 
      no-body 
      class="overflow-hidden article-card"
    >
      <b-row
        no-gutters
        :class="articleIndex % 2 != 0 ? 'reverse-row': ''"
        class="p-4"
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
                  <div class="tag">{{ article.newsSite }}</div>
              </div>
              <p class="text">
                {{ article.summary }}
              </p>
              <div class="card-button">
                <b-button @click="openModal(article.id)">
                  Ver Mais
                </b-button>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
      <b-modal 
        hide-header
        hide-footer
        centered
        :id="`modal-${article.id}`"
        size="lg"
      >
        <div class="close-modal">
          <b-icon icon="x-lg" @click="closeModal(article.id)"></b-icon>
        </div>
        <ModalContent :id="article.id"/>
      </b-modal>
    </b-card>
  </div>
</template>
<script>
import ModalContent from '@/components/body/ModalContent.vue'
export default {
  // eslint-disable-next-line
  name: 'SpaceCard',
  components:{
    ModalContent,
  },
  props:{
    article: { type: Object, default: () => {} },
    cardStyle: {type: Boolean, default: false},
    articleIndex: {type: Number, required: true, default: 0}
  },
  methods:{
    openModal(id){
      this.$bvModal.show(`modal-${id}`)
    },
    closeModal(id){
      this.$bvModal.hide(`modal-${id}`)
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
  }
}
</script>
<style lang="scss" scoped>
.article-card{
      max-width: 800px;
      width: 100%;
      margin: 20px auto;
      min-height: 350px;
      box-sizing: border-box;

      @media (max-width: 425px) {
        max-width: 100%;
      }

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
    }
      .close-modal{
        position: absolute;
        right: 5px;
        top: 3px;
        color: #8a8a8a;

        svg{
          cursor: pointer;
        }

        &:hover{
          color: #1e2022
        }
      }
</style>

