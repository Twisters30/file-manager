<template>
  <div class="container">
    <header class="header">
      <img class="header__logo" src="../assets/logo.svg" alt="logo">
      <div class="upload__group-wrapper">
        <div class="upload__wrapper">
          <span class="upload__text">UPLOAD</span>
          <label class="upload__icon">
            <input @change="saveFiles($event)" class="upload__input" type="file">
          </label>
        </div>
        <div class="trash__wrapper">
          <span class="trash__icon">
          </span>
        </div>
        <div class="create-folder__wrapper">
      <span @click="createActive = !createActive" class="create-folder__icon" type="button">
        <input ref="input" @click.stop v-if="createActive" type="text" class="create-folder__input" value="new folder">
        <div class="create-folder__btn-group">
<!--          <button v-if="createActive" class="create-folder__btn-cancel">-->
<!--            отмена-->
<!--          </button>-->
          <button v-if="createActive" @click="createFolder" class="create-folder__btn-accept" type="button">
            подтвердить
          </button>
        </div>
        <span class="create-folder__cross"></span>
      </span>
        </div>
      </div>
      <div class="form-search__wrapper">
        <form class="form-search">
          <label class="form-search__label">
            <input class="form-search__input" type="text" placeholder="Search">
          </label>
        </form>
        <img class="header__icon" src="../assets/icon-pacman.png" alt="icon">
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      folderArray:[],
      createActive: false
    }
  },
  methods:{
    saveFiles(event) {
      const file = {}
      const currentFile = event.target.files[0].name
      const fileExt = currentFile.substring(0,1) === '.' ? '' : currentFile.split('.').slice(1).pop() || ''
      const fileName = currentFile.replace(/\.[^/.]+$/, '')
      const fileDateCreate = event.target.files[0].lastModifiedDate
      const fileSize = event.target.files[0].size
      console.log(event.target.files[0].size)
      file.name = fileName
      file.type = fileExt
      file.date = fileDateCreate
      file.size = fileSize
      this.folderArray.push(file)
      this.passArray()
    },
    passArray() {
      if(this.folderArray) {
        this.$emit('passFile',this.folderArray)
        console.log(this.folderArray)
      }
    },
    createFolder() {
      const file = {}
      const fileName = this.$refs.input.value
      file.name = fileName
      file.type = 'folder'
      file.date = new Date()
      file.size = 0
      this.folderArray.push(file)
      this.createActive = false
      this.$emit('passFile',this.folderArray)
      console.log(file)
      console.log(this.createActive)
    },
  }
}
</script>

<style lang="scss" scoped>

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    &__logo {
      width: 87px;
    }
    &__icon {
      display: block;
      width: 30px;
      height: 30px;
      line-height: 0;
    }
    &__file-manager {
      display: flex;
    }
  }
  .upload {
    &__input {
      width: 22px;
      height:22px;
      &[type="file"] {
        display: none;
      }
    }
    &__group-wrapper {
      display: flex;
      cursor: pointer;
      & > :not(:last-child) {
        margin-right: 12px;
      }
    }
    &__wrapper {
      display: flex;
      align-items: center;
      width: 120px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
      border-radius: 16px;
    }
    &__text {
      display: block;
      padding: 9px;
    }
    &__icon {
      position: relative;
      display: block;
      width: 22px;
      height: 22px;
      background: #FFD600;
      border-radius: 50%;
      cursor: pointer;
      &::before,
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 10px;
        height: 1px;
        background-color: #232323;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
      }
      &::after {
        transform: rotate(90deg) translateY(50%);
        left: 31%;
      }
    }
  }
  .trash {
    &__wrapper {
      width: 58px;
      background: #EBEBEB;
      border-radius: 16px;
      cursor: pointer;
    }
    &__icon {
      position: relative;
      display: block;
      width: 20px;
      height: 21px;
      padding: 5px 18px 6px 20px;
      background: url("../assets/trash/Basket.svg") no-repeat center;
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-40%);
        display: block;
        content: '';
        width: 7px;
        height: 10px;
        background: url("../assets/trash/line-basket.svg");
      }
    }
  }
  .create-folder {
    &__wrapper {
      width: 58px;
      background: #FFFFFF;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);
      border-radius: 16px;
    }
    &__input {
      position: absolute;
      left: 100px;
    }
    &__icon {
      position: relative;
      display: block;
      content: '';
      width: 23px;
      height: 18px;
      padding: 7px 17px;
      background: url("../assets/add-file/folder.svg") no-repeat center;
      cursor: pointer;
      &::before {
        position: absolute;
        display: block;
        left: 50%;
        content: '';
        width: 17px;
        height: 6px;
        background: url("../assets/add-file/folder-header.svg") no-repeat;
        transform: translateX(-50%);
      }
    }
    &__btn-group {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 100px;
      top: 32px;
    }
    &__btn-accept {
      padding: 2px 5px;
      color: #fff;
      background-color: #20ad00;
      border-color: #20ad00;
      border-radius: 16px;
    }
    &__cross {
      position: absolute;
      right: 13px;
      top: 2px;
      display: block;
      width: 12px;
      height: 12px;
      border: 1px solid #232323;
      border-radius: 50%;
      background: #fff;
      &::before,
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 6px;
        height: 1px;
        background-color: #232323;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
      }
      &::after {
        transform: rotate(90deg) translateY(50%);
        left: 31%;
      }
    }
  }
  .form-search {
    background: #EBEBEB;
    border-radius: 16px;
    margin-right: 8px;
    &__wrapper {
      display: flex;
    }
    &__label {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 50%;
        right: 9px;
        width: 22px;
        height: 22px;
        transform: translateY(-50%);
        background: url("../assets/search.svg") no-repeat;
        cursor: pointer;
      }
    }
    &__input {
      padding: 9px 16px;
      border: none;
      background-color: transparent;
    }
  }
</style>