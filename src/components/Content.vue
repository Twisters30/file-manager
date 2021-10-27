<template>
  <div class="content">
    <div class="container">
      <div class="content__btn-wrapper">
        <button class="content__btn">DFILE STORAGE →</button>
        <div class="content__dropdown-wrapper">
          <div class="content__btn-flex">
            <button @click="sort = !sort" :class="{'sort-active-btn' : sort}" class="content__btn-sort" type="button">sort by name</button>
            <span @click="sort = !sort" :class="{'sort-active' : sort}" class="content__icon-arrow"></span>
          </div>
          <ul v-if="sort" class="content__dropdown-list">
            <li class="content__dropdown-item">BY DATE</li>
            <li class="content__dropdown-item">BY SIZE</li>
            <li class="content__dropdown-item">BY TYPE</li>
          </ul>
        </div>
      </div>
      <folder-storage :folderArray="folderArray"/>
    </div>
  </div>
</template>

<script>
import FolderStorage from "./FolderStorage";
export default {
  name: "Content",
  components: { FolderStorage },
  props:{
    folderArray:[]
  },
  data() {
    return {
      sort: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    &__btn-wrapper {
      padding: 30px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__dropdown-wrapper {
      position: relative;
    }
    &__dropdown-list {
      position: absolute;
      width: 100%;
      top: 6px;
      left: 0;
      padding:0;
      background-color: #fff;
      z-index: 99;
    }
    &__dropdown-item {
      width: 100%;
      padding:14px 30px;
      text-align: center;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
      border-bottom: 1px solid #ACADB5;
      cursor: pointer;
    }
    &__btn-sort {
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #000;
      transition: 200ms ease-in-out;
    }
    &__icon-arrow {
      display: block;
      background: url("../assets/angle-top-bold.svg");
      width: 16px;
      height: 16px;
      transition: 200ms ease-in-out;
    }
    &__btn-flex {
      display: flex;
    }
  }
  .sort-active {
    transform: rotate(180deg);
    filter: invert(0.5) sepia(1) ;
  }
  .sort-active-btn {
    color: #ACADB5;
  }
</style>