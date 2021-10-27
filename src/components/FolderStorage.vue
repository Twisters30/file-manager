<template>
  <div class="folder-storage__wrapper">
    <ul class="folder-storage__list">
      <li
          v-for="(file, index) in folderArray"
          :key="index" class="folder-storage__item"
          :class="{'focus-file': focusFile}"
          @click="focusFile = !focusFile"
      >
        <span :class="filterExtension(file.type)" class="folder-storage__img">
          <span v-if="filterExtension(file.type) === 'ext-txt'" class="folder-storage__lines"></span>
        </span>
        <span class="folder-storage__file-name">{{ file.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FolderStorage",
  props: {
    folderArray: Array,
  },
  data() {
    return {
      focusFile: false
    }
  },
  mounted() {

  },
  methods: {
    filterExtension(extension){
      switch (extension){
        case 'txt':
          return 'ext-txt';
        case 'pptx':
          return 'ext-pptx'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .folder-storage {
    &__list {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      display: block;
      tab-index: 1;
      width: fit-content;
      margin-right: 48px;
      margin-bottom: 100px;
      cursor: pointer;
    }
    &__file-name {
      display: block;
      text-align: center;
    }
    &__img {
      position: relative;
      display: block;
      width: 104px;
      height: 75px;
      margin-bottom: 10px;
      background-color: #ACADB5;
      &::before {
        position: absolute;
        content: '';
        display: block;
        width: 45px;
        height: 15px;
        background: url("../assets/file-icon/header-file.svg") #FFD600;
      }
      &::after {
        position: absolute;
        top: -25px;
        content: '';
        display: block;
        width: 43px;
        height: 25px;
        clip-path: polygon(0 69%, 91% 71%, 100% 100%, 0 100%);
        background-color: #FFD600;
      }
    }
    &__lines {
      display: block;
      position: absolute;
      filter: brightness(0.8);
      top: 55%;
      left: 50%;
      width: 35px;
      height: 1px;
      background: #fff;
      transform: translateX(-50%);
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        left: 50%;
        width: 35px;
        height: 1px;
        background: #fff;
        transform: translateX(-50%);
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 10px;
        left: 50%;
        width: 35px;
        height: 1px;
        background: #fff;
        transform: translateX(-50%);
      }
    }
  }
  .ext-txt {
    position: relative;
    width: 77px;
    height: 96px;
    background: url("../assets/file-icon/txt-file.svg");
    &::before {
      content: 'txt';
      top: 0;
      left: 35%;
      width: 65%;
      padding: 25px 0;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.05em;
      color: #fff;
      background: url("../assets/file-icon/triangle-yellow.svg") no-repeat 100% 0;
    }
    &::after {
      position: absolute;
      top: 50%;
      left: 53%;
      content: '';
      width: 40px;
      height: 1px;
      background: #fff;
      transform: translateX(-50%);
    }
  }
  .focus-file {
    border: 1px solid #20ad00;
  }
</style>