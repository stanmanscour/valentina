<template>
  <ul class="menuMobile">

    <li class="menuMobile__itemLink">
      <router-link to="explorer" class="menuMobile__itemLink__link">
        <img class="menuMobile__itemLink__link--icon" src="src/assets/icons/explorer.svg" alt="">
        <span class="menuMobile__itemLink__link--title">explorer</span>
      </router-link>
    </li>

    <li class="menuMobile__itemLink">
      <router-link to="library" class="menuMobile__itemLink__link">
        <img class="menuMobile__itemLink__link--icon" src="src/assets/icons/white-add.svg" alt="">
        <span class="menuMobile__itemLink__link--title">bibliothèque</span>
      </router-link>
    </li>

    <!--
    <li class="menuMobile__itemLink">
      <a href="#" class="menuMobile__itemLink__link">
        <img class="menuMobile__itemLink__link--icon" src="src/assets/icons/white-research.svg" alt="">
        <span class="menuMobile__itemLink__link--title">profil</span>
      </a>
    </li>
    -->

    
    

    <li class="menuMobile__itemLink">
      <router-link to="/account" class="menuMobile__itemLink__link">
        <img class="menuMobile__itemLink__link--icon" src="src/assets/icons/settings.svg" alt="">
        <span class="menuMobile__itemLink__link--title">réglages</span>
      </router-link>
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
    position: fixed;
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
        
        &.router-link-active:after {
          content: '';
          height: 3px;
          width: 14%;
          background-color: white;
          display: inline-block;
          position: absolute;
          bottom: 0px;
        }

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