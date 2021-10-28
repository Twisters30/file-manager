<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__left-side">
          <span>EXCHANGE</span>
          <span class="gray--text">{{ filesData.length }} {{ fileCalc }}</span>
        </div>
        <span class="separator--vertical-right"></span>
        <div class="footer__right-side">
          <span class="gray--text">{{ fileSize }} BITE used</span>
          <span>RECENTLY DELETED</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    filesData:Array,
  },
  data(){
    return {}
  },
  computed: {
    fileCalc() {
      return this.filesData.length > 2 ? 'files' : 'file'
    },
    fileSize() {
      let size = 0
      for (let i = 0; i < this.filesData.length; i++) {
        size += this.filesData[i].size
      }
      return size
    },
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 20px 17px;
  flex: 0 0 auto;
  &__content {
    display: flex;
    justify-content: space-between;
  }
  &__right-side,
  &__left-side{
    display: flex;
    justify-content: space-between;
    flex-basis: 50%;
  }
}
</style>