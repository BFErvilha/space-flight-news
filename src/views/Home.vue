<template>
  <div>
    <Header @search="getSearch($event)"/>
    <Body :search-term="search"/>
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
      search: '',
    }
  },
  methods: {
    getSearch(search){
      this.search = search
    }
  }
}
</script>