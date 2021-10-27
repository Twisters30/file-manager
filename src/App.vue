<template>
  <div id="app">
    <Header @passFile="getFolders"/>
    <span class="separator"></span>
    <Content :folderArray="folders"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content'

export default {
  name: 'App',
  components: { Header, Content },
  data(){
    return {
      folders:[]
    }
  },
  methods: {
    getFolders(value) {
      this.folders = value
      console.log(value,'емит')
    }
  }
}
</script>

<style lang="scss">
 @import "assets/scss/global";
</style>
