<template>
  <div>
    <Header />
    <Body />
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
}
</script>