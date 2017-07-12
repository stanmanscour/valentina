<template>
  <header class="header">
    <button class="header__informationBtn"><span></span></button>
    <div class="header__inputs">
      <div class="header__inputs--research">
        <label v-show="labelResearchVisible">Rechercher <span>dans ma musique</span></label>
        <input @focus="research(true)" @blur="research(false)" type="text">
        <input v-show="!labelResearchVisible" type="submit">
      </div>
      <div class="header__inputs--add">
        <label v-show="labelAddVisible">Ajouter <span>de la musique</span></label>
        <input @focus="add(true)" @blur="add(false)" type="text">
        <input v-show="!labelAddVisible" type="submit">
      </div>
    </div>
    <button class="header__toolsBtn"><span></span></button>
  </header>
</template>

<script>
  export default {
    data: function() {
      return {
        labelResearchVisible: true,
        labelAddVisible: true
      }
    },
    methods: {
      research(boolean) {
        // vérifier que l'input n'est pas vide, si il l'est ...
        this.labelResearchVisible = !boolean;
      },
      add(boolean) {
        this.labelAddVisible = !boolean;
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
        label {
          position: absolute;
          color: black;
          @extend .val-font;
          font-size: 15px;
          font-weight: 200;
          margin-top: 1px;

          @media screen and (min-width: em(768)){

          }

          span {
            display: none;
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
          &:focus {
            outline: none;
            opacity: .2;
          }
        }
      }
      &--add {
        input[type="text"] {
          
        }
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


