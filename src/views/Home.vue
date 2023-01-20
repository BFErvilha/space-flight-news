<template>
  <div>
    <Header @setFilter="getFilter($event)" />
    <Body :filterOptions="filter" :searchOption="search"/>
  </div>
</template>

<script>
import Header from './header/Header.vue'
import Body from './body/Body.vue'
// @ is an alias to /src

export default {
  // eslint-disable-next-line
  name: 'Home',
  components: {
    Header,
    Body
  },
  data(){
    return {
      filter: null,
      search: null,
    }
  },
  methods:{
    getFilter(filter){
      this.filter = filter
    },
  },
  created(){
    if(this.$route.query){
      this.search = this.$route.query.search
      this.filter = this.$route.query.id
    } 
  }
}
</script>