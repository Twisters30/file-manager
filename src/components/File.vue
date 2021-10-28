<template>
  <li
      :class="{'focus-file': focusFile}"
      @click="focusFile = !focusFile"
  >
        <span :class="filterExtension(file.type)" class="folder-storage__img">
          <span v-if="filterExtension(file.type) === 'ext-txt'" class="folder-storage__lines"></span>
          <span v-show="false" class="id-file">{{ file.id }}</span>
        </span>
    <span class="folder-storage__file-name">{{ file.name }}</span>
  </li>
</template>

<script>
export default {
  name: "File",
  props: {
    file: Object
  },
  data() {
    return {
      focusFile: false
    }
  },
  methods: {
    filterExtension(extension){
      switch (extension){
        case 'txt':
          return 'ext-txt';
        case 'pptx':
          return 'ext-pptx';
        case 'xls' :
          return 'ext-xls';
        case 'png' :
          return 'ext-png';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.folder-storage {
  &__item {
    display: block;
    tab-index: 1;
    width: fit-content;
    margin-right: 48px;
    margin-bottom: 100px;
    cursor: pointer;
    transition: all 200ms;
  }
  &__file-name {
    display: block;
    text-align: center;
    max-width: 104px;
    overflow: hidden;
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
    content: 'TXT';
    top: 0;
    left: 30%;
    width: 70%;
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
.ext-pptx {
  position: relative;
  width: 77px;
  height: 96px;
  background: url("../assets/file-icon/txt-file.svg");
  &::before {
    content: 'PPTX';
    top: 0;
    left: 14%;
    width: 72%;
    padding: 35px 7px;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: #fff;
    background:url("../assets/file-icon/triangle-yellow.svg") no-repeat 92% -1%,
  url("../assets/file-icon/pptx-figure.svg") no-repeat 32% 89%,
  url("../assets/file-icon/pptx-figure.svg") no-repeat 26% 95%
  }
  &::after {
    background: none;
  }
}
.ext-xls {
  position: relative;
  width: 77px;
  height: 96px;
  background: url("../assets/file-icon/txt-file.svg");
  &::before {
    content: 'XLS';
    top: 0;
    left: 20%;
    width: 72%;
    padding: 35px 7px;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: #fff;
    background:url("../assets/file-icon/triangle-yellow.svg") no-repeat 85% -1%,
    url("../assets/file-icon/line-horizontal.svg") no-repeat 10% 66%,
    url("../assets/file-icon/line-horizontal.svg") no-repeat 10% 75%,
    url("../assets/file-icon/line-horizontal.svg") no-repeat 10% 84%,
    url("../assets/file-icon/line-horizontal.svg") no-repeat 10% 94%,
    url("../assets/file-icon/line-vertical.svg") no-repeat 5% 90%,
    url("../assets/file-icon/line-vertical.svg") no-repeat 15% 90%,
    url("../assets/file-icon/line-vertical.svg") no-repeat 56% 90%;
  }
  &::after {
    background: none;
  }
}
.ext-png{
  position: relative;
  width: 77px;
  height: 96px;
  background: url("../assets/file-icon/txt-file.svg");
  &::before {
    content: 'PNG';
    top: 0;
    left: 20%;
    width: 72%;
    padding: 35px 7px;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: #fff;
    background:url("../assets/file-icon/triangle-yellow.svg") no-repeat 85% -1%,
    url("../assets/file-icon/line-horizontal.svg") no-repeat 10% 66%,
    url("../assets/file-icon/line-horizontal.svg") no-repeat 10% 94%,
    url("../assets/file-icon/line-vertical.svg") no-repeat 5% 90%,
    url("../assets/file-icon/line-vertical.svg") no-repeat 58% 90%,
    url("../assets/file-icon/mounting-png.svg") no-repeat 7% 90%;
  }
  &::after {
    background: none;
  }
}
.focus-file {
  -webkit-box-shadow: 1px 1px 9px 6px rgba(34, 80, 41, 0.2);
  -moz-box-shadow: 1px 1px 9px 6px rgba(34, 80, 41, 0.2);
  box-shadow: 1px 1px 9px 6px rgba(34, 80, 41, 0.2);
}
</style>