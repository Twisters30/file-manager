<template>
  <div id="app">
    <Header @passFile="getFolders"/>
    <span class="separator--bottom"></span>
    <Content :folderArray="folders"/>
    <span class="separator--top"></span>
    <Footer :files-data="folders"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content'
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: { Header, Content, Footer },
  data(){
    return {
      folders:[]
    }
  },
  methods: {
    getFolders(value) {
      this.folders = value
    }
  }
}
</script>

<style lang="scss">
 @import "~@/assets/scss/global";

 #app {
   display: flex;
   flex-direction: column;
   height: 100vh;
 }

 .content {
   flex: 1 0 100%;
 }
 .footer {
   flex: 0 0 auto;
 }
</style>
