<template>
  <header class="topHeader">
    <div class="topHeader__left">
      <img class="topHeader__left--logoMobile" src="src/assets/icons/logo-valentina.svg" alt="">
      <a class="topHeader__left--logoDesktop" href="#">valentina.io</a>
      <a class="topHeader__left--navigationDesktop" href="#">-> explorer</a>
    </div>
    <div class="topHeader__middle">
      <!-- bibliothèque -->

      <template>
        <a class="topHeader__middle--addLink" href="#">Ajouter <img src="src/assets/icons/white-add.svg"></a>
        <a class="topHeader__middle--searchLink" href="#">Rechercher <img src="src/assets/icons/white-research.svg"></a>
      </template>
      
      <!-- -->
    </div>
    <div class="topHeader__right">
      <a class="topHeader__right--accountLink" href="#">Mon compte</a>
      <a class="topHeader__right--configLink" href="#"><img src="src/assets/icons/white-research.svg"></a>
    </div>
  </header>
</template>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .topHeader {
    box-shadow: 0px 1px 5px rgba(1, 107, 85, 0.59);
    background-color: #00a884;
    padding-left: 30px;
    padding-right: 30px;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 350; // not real
    justify-content: space-between;

    &__left {
      width: 33%;
      display: flex;
      flex-direction: row;
      align-items: center;
      
      &--logoMobile {
        display: flex;
         @media screen and (min-width: em(768)){
           display: none;
         }
      }
      &--logoDesktop {
        display: none;
        @extend .val-font;

        @media screen and (min-width: em(768)){
          display: flex;
          text-decoration: none;
          color: white;
          font-size: 16px;
        }
      }
      &--navigationDesktop {
        display: none;
        @extend .val-font;

        @media screen and (min-width: em(768)){
          display: flex;
          font-size: 12px;
          margin-left: 10px;
          color: white;
          text-decoration: none;
        }
      }
    }
    
    &__middle {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: flex-end;
      align-items: center;

      @media screen and (min-width: em(768)){
        justify-content: center;
      }

      &--addLink {
        margin-right: 30px;
        display: flex;
        flex-direction: row;
        color: white;
        text-decoration: none;
        @extend .val-font;
        align-items: center;
        font-size: 12px;

        @media screen and (min-width: em(768)){
          margin-right: 20px;
        }

        img {
          margin-left: 7px;
        }
      }
      &--searchLink {
        display: flex;
        flex-direction: row;
        color: white;
        text-decoration: none;
        @extend .val-font;
        align-items: center;
        font-size: 12px;

        @media screen and (min-width: em(768)){
          margin-left: 20px;
        }

        img {
          margin-left: 7px;
        }
      }
    }
    &__right {
      display: none;
    
      @media screen and (min-width: em(768)){
        width: 33%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }

      &--accountLink {
        margin-right: 15px;
        display: flex;
        flex-direction: row;
        color: white;
        text-decoration: none;
        @extend .val-font;
        align-items: center;
        font-size: 12px;

        img {
          margin-left: 7px;
        }
      }
      &--configLink {
        display: flex;
        flex-direction: row;
        color: white;
        text-decoration: none;
        @extend .val-font;
        align-items: center;
        font-size: 12px;

        img {
          margin-left: 7px;
        }
      }
    }
    
  }
</style>

<script>
  export default {

  }
</script>