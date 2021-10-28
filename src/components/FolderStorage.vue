<template>
  <div class="folder-storage__wrapper">
    <ul class="folder-storage__list">
      <file
          v-for="(file, index) in folderArray"
          :key="index"
          class="folder-storage__item"
          :file="file"
      />
    </ul>
  </div>
</template>

<script>
import File from "./File";
export default {
  name: "FolderStorage",
  components: { File },
  props: {
    folderArray: Array,
  },
}
</script>

<style lang="scss" scoped>
  .folder-storage {
    &__list {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>