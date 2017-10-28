<template>
  <ul class="menuMobile">

    <li class="menuMobile__itemLink">
      <a href="#" class="menuMobile__itemLink__link">
        <img class="menuMobile__itemLink__link--icon" src="src/assets/icons/explorer.svg" alt="">
        <span class="menuMobile__itemLink__link--title">explorer</span>
      </a>
    </li>

    <li class="menuMobile__itemLink">
      <a href="#" class="menuMobile__itemLink__link">
        <img class="menuMobile__itemLink__link--icon" src="src/assets/icons/white-research.svg" alt="">
        <span class="menuMobile__itemLink__link--title">rechercher</span>
      </a>
    </li>

    <li class="menuMobile__itemLink">
      <a href="#" class="menuMobile__itemLink__link">
        <img class="menuMobile__itemLink__link--icon" src="src/assets/icons/white-add.svg" alt="">
        <span class="menuMobile__itemLink__link--title">ajouter</span>
      </a>
    </li>

    <li class="menuMobile__itemLink">
      <a href="#" class="menuMobile__itemLink__link">
        <img class="menuMobile__itemLink__link--icon" src="src/assets/icons/explorer.svg" alt="">
        <span class="menuMobile__itemLink__link--title">réglages</span>
      </a>
    </li>


  </ul>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .menuMobile {
    z-index: 500;
    position: absolute;
    bottom: 0px;
    height: 60px;
    background-color: #026A54;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media screen and (min-width: em(768)){
      display: none;
    }

    &__itemLink {
      
      &__link {
        color: white;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &--icon {
          width: 20px;
          height: 17px;
        }
        &--title {
          margin-top: 5px;
          font-size: 9px;
         
          @extend .val-font;
        }
      }
    }
  }
</style>