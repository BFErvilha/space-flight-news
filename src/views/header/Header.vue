<template>
  <div class="header-content">
    <b-container class="pt-2">
    <b-row class="justify-content-end">
      <b-col
        lg="3"
      >
        <b-form-input type="text" v-model="searchTerm" placeholder="Pesquisar"/>
        <b-button class="icon-form" @click="getSearch()">
          <b-icon icon="search"></b-icon>
        </b-button>
      </b-col>
      <b-col
        lg="2"
      >
      <b-form-group>
          <v-select 
            v-model="selectedFilter"
            :options="filters"
            :reduce="(filter) => filter.id"
            @input="getFilter()"
            :clearable="false"
          />
        </b-form-group>
      </b-col>
    </b-row>
    
    <logo-space/>
    </b-container>
  </div>
</template>
<script>
import LogoSpace from '@/components/header/LogoSpace.vue'
import { mapMutations } from 'vuex'


export default {
  components: { LogoSpace },
  
  // eslint-disable-next-line
  name: 'Header',
  component: {
    LogoSpace
  },
  data() {
    return {
      selectedFilter: 2,
      searchTerm: '',
      filters: [
        { id: 2, label: 'Mais Novas' },
        { id: 1, label: 'Mais Antigas' },
      ]
    }
  },
  watch: {
    searchTerm: {
      handler: function (val){
        if(val === ''){
          this.$store.commit('setSearch', null)
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setSearch', 'setFilter']),
    getSearch(){
      this.setSearch(this.searchTerm)
    },
    getFilter(){
      this.setFilter(this.selectedFilter)
    }
  }

}

</script>

<style lang="scss">
  .header-content{
    border-bottom: 1px solid #302e53;
    width: 100%;
    height: 400px;
    background: url('../../../public/img/bg/bg.jpg');
    background-size: cover;
    background-position: center;
  }
  .icon-form{
    position: relative;
    top: -34px;
    right: -44%;
    background-color: #302e53;
    width: 30px;
    height: 30px;
    padding: 4px 5px;
    border-radius: 0.375rem;
    z-index: 1;

    svg{
      color: white
    }
  }
</style>