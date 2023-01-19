<template>
  <div class="header-content">
    <b-container class="pt-2">
    <b-row class="justify-content-end">
      <b-col
        lg="3"
      >
      <b-input-group>
        <b-form-input type="text" v-model="searchTerm"/>

        <b-input-group-append>
          <b-button variant="outline-secondary" @click="getSeatch()">Button</b-button>
        </b-input-group-append>
      </b-input-group>
      </b-col>
      <b-col
        lg="2"
      >
      <b-form-group>
          <v-select 
            v-model="selectedFilter"
            :options="filters"
            :reduce="(filter) => filter.id"
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


export default {
  components: { LogoSpace },
  
  // eslint-disable-next-line
  name: 'Header',
  component: {
    LogoSpace
  },
  data() {
    return {
      selectedFilter: 0,
      searchTerm: '',
      filters: [
        { id: 0, label: 'Sort' },
        { id: 1, label: 'Mais Antigas' },
        { id: 2, label: 'Mais Novas' },
      ]
    }
  },
  methods: {
    getSeatch(){
      this.$emit('search', this.searchTerm)
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
</style>