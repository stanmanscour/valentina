<template>
  <header class="header">
    <button class="header__informationBtn"><span></span></button>
    <div class="header__inputs">
      <div class="header__inputs--research">
        <label v-show="labelResearchVisible">Rechercher <span>dans ma musique</span></label>
        <input v-model="valResearch" @focus="toggleResearch(true)" @blur="tryResearch" type="text">
        <input @click="research" v-show="!labelResearchVisible" type="submit">
      </div>
      <div class="header__inputs--add">
        <label v-show="labelAddVisible">Ajouter <span>de la musique</span></label>
        <input v-model="valAdd" @focus="toggleAdd(true)" @blur="tryAdd" type="text">
        <input @click="add" v-show="!labelAddVisible" type="submit">
      </div>
    </div>
    <button class="header__toolsBtn"><span></span></button>
  </header>
</template>

<script>
  import { EventBus } from './../main';

  export default {
    data: function() {
      return {
        labelResearchVisible: true,
        labelAddVisible: true,
        valResearch: '',
        valAdd: ''
      }
    },
    methods: {
      toggleResearch(boolean) {
        this.labelResearchVisible = !boolean;
      },
      tryResearch() {
        this.valResearch === '' ? this.toggleResearch(false) : '';
      },
      research() {
        console.log("Je recherche: '" + this.valResearch + "'");
      },
      toggleAdd(boolean) {
        this.labelAddVisible = !boolean;
      },
      tryAdd() {
        this.valAdd === '' ? this.toggleAdd(false) : '';
  
      },
      getIdFromYT(url){
        let id = url.split('https://www.youtube.com/watch?v=');
        return id[1];
      },
      verifyUrl(string) {
        var substringYT = "youtube",
          substringSNCLD = "soundcloud",
          response;
  
        if (string.includes(substringYT)) {
          console.log(string);

          let url = this.getIdFromYT(string);
          // https://www.youtube.com/watch?v=
          const newSong = {
            src: url,
            media: 'youtube',
            counter: 0
          };
          return newSong;
        } else if (string.includes(substringSNCLD)) {
          const newSong = {
            src: string,
            media: 'soundcloud',
            counter: 0
          };
          return newSong;
        } else {
          return 'error';
        }
  
        return response;
      },

      getMedia() {
        var string = this.valAdd;
        var media = this.verifyUrl(string);
        return media;
      },

      add() {
        var newSong = this.getMedia();
        if (typeof newSong === "object"){
          EventBus.$emit('addFromHeader', newSong);
        } else {
          let error = "L'url ne semble pas venir de Youtube ou de Soundcloud";
          EventBus.$emit('error', error)
        }

      }
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';
  .header {
    display: flex;
    flex-direction: row;
    height: 44px;
    width: 100%;
    position: fixed;
    top: em(10);
    z-index: 20;
    padding-left: 3%;
    padding-right: 3%;
    @media screen and (min-width: em(1024)) {
      max-width: 1024px;
      padding: 0;
      left: calc(50% - 512px);
    }
    &__informationBtn,
    &__toolsBtn {
      width: 50px;
      height: 100%;
      border: none;
      background-color: white;
      color: black;
      border-radius: 1px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px;
    }
    &__informationBtn span {
      background-image: url("/src/assets/icons/info.svg");
      background-repeat: no-repeat;
      width: 4px;
      height: 12px;
      display: inline-block;
    }
    &__toolsBtn span {
      background-image: url("/src/assets/icons/hamburger.svg");
      background-repeat: no-repeat;
      width: 13px;
      height: 12px;
      display: inline-block;
    }
    &__inputs {
      display: flex;
      flex-direction: row;
      padding-left: 4px;
      padding-right: 4px;
      box-sizing: border-box;
      flex-grow: 1;
      &--add,
      &--research {
        width: 100%;
        flex-grow: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding-left: 0px;
        @media screen and (min-width: em(768)) {
          align-items: flex-start;
          padding-left: 20px;
        }
        label {
          position: absolute;
          color: black;
          @extend .val-font;
          font-size: 15px;
          font-weight: 200;
          span {
            display: none;
            @media screen and (min-width: em(768)) {
              display: inline;
            }
          }
        }
        input[type="text"] {
          position: absolute;
          top: 0px;
          background-color: transparent;
          left: 0px;
          right: 0px;
          bottom: 0px;
          width: 100%;
          box-sizing: border-box;
          border: none;
          padding-left: em(20);
          font-size: em(16);
          &:focus {
            outline: none;
          }
        }
        input[type="submit"] {
          z-index: 10;
          right: 10px;
          position: absolute;
          width: 17px;
          height: 17px;
          z-index: 30;
          border: none;
          background-size: contain;
          background-color: transparent;
          color: transparent;
          @media screen and (min-width: em(768)) {
            right: 16px;
          }
          &:focus {
            outline: none;
            opacity: .2;
          }
        }
      }
      &--add {
        input[type="text"] {}
        input[type="submit"] {
          background-image: url("/src/assets/icons/add.svg");
        }
      }
      &--research {
        input[type="text"] {
          z-index: 20;
          border-right: 1px solid #e7e7e7;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        input[type="submit"] {
          background-image: url("/src/assets/icons/research.svg");
        }
      }
    }
  }
</style>


