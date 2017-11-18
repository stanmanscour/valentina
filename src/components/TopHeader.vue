<template>
  <header>
    <div class="topHeader">
      <div class="topHeader__left">
        <img class="topHeader__left--logoMobile" src="src/assets/icons/logo-valentina.svg" alt="">
        <a class="topHeader__left--logoDesktop" href="#">valentina.io</a>
        <div class="topHeader__left__navigationDesktop">
          <router-link class="topHeader__left__navigationDesktop--explorer" to="explorer">Explorer</router-link>
          <router-link class="topHeader__left__navigationDesktop--library" to="library">Bibliothèque</router-link>
        </div>
      </div>
      <div class="topHeader__middle">
        <!-- bibliothèque -->

        <template v-if="$route.path === '/library'">
          <a @click.prevent="toggleAdd" class="topHeader__middle--addLink" href="#">Ajouter <img src="src/assets/icons/white-add.svg"></a>
          <a @click.prevent="toggleLibrarySearch" class="topHeader__middle--searchLink" href="#">Rechercher <img src="src/assets/icons/white-research.svg"></a>
        </template>
        <template v-if="$route.path === '/explorer'">
          <a @click.prevent="toggleExplorerSearch" class="topHeader__middle--addLink" href="#">Rechercher une playlist, un utilisateur <img src="src/assets/icons/white-research.svg"></a>
        </template>
        
        <!-- -->
      </div>
      <div class="topHeader__right">
        <router-link to="/login" v-if="!auth" class="topHeader__right--accountLink" href="#">Se connecter</router-link>
        <router-link to="/account" v-if="auth" class="topHeader__right--accountLink" href="#">Mon compte</router-link>
        <!-- <a class="topHeader__right--configLink" href="#"><img src="src/assets/icons/settings.svg"></a> -->
      </div>
    </div>
    
    <div class="addonHeader">
      <div class="addonHeader__librarySearch" v-if="searchLibraryVisible && $route.path === '/library'">
        <input class="addonHeader__librarySearch--input" type="text" placeholder="Rechercher une musique...">
      </div>
      <div class="addonHeader__explorerSearch" v-if="searchExplorerVisible && $route.path === '/explorer'">
        <input class="addonHeader__explorerSearch--input" type="text" placeholder="Rechercher une playlist, un utilisateur...">
      </div>
      <val-add-header v-if="addVisible && $route.path === '/library'"></val-add-header>
    </div>
  </header>
</template>

<script>
  import AddHeader from './AddHeader.vue';
  import axios from 'axios';

  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    data(){
      return {
        addVisible: false,

      }
    },
    computed: {
      ...mapGetters({
        searchLibraryVisible: 'searchLibrary/getSearchVisible',
        searchExplorerVisible: 'searchExplorer/getSearchVisible',
        auth: 'isAuthenticated',
        user: 'getUser'
      })
    },
    methods: {
      ...mapActions({
        toggleLibrarySearch: 'searchLibrary/toggleSearch',
        toggleExplorerSearch: 'searchExplorer/toggleSearch'
      }),
      toggleAdd(){
        this.addVisible = !this.addVisible;
      }
    },
    components: {
      valAddHeader: AddHeader
    },

  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  header {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    box-shadow: 1px 5px 20px 0px rgba(1, 107, 85, 0.10);
    background-color: #019B7B;
    z-index: 350;
  }

  .topHeader {
    padding-left: 30px;
    padding-right: 30px;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;

    &__left {
      width: 63%;
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
      &__navigationDesktop {
        display: none;
        @extend .val-font;

        @media screen and (min-width: em(768)){
          flex-direction: row;
          display: flex;
          margin-left: 20px;
          height: 100%;
          align-items: center;
          justify-content: space-between;


          &--explorer,
          &--library {
            font-size: 12px;
            color: white;
            opacity: 0.4;
            text-decoration: none;
            margin-right: 5px;
            margin-left: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;

            &.router-link-active {
              opacity: 1;
              position: relative; 

              &:after {
                display: inline-block;
                content: '';
                width: 100%;
                position: absolute;
                bottom: 0px;
                height: 3px;
                left: 0px;
                background-color: white;
              }
            }
          }
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
          margin-left: 5px;
          margin-right: 5px;
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
          margin-left: 5px;
          margin-right: 5px;
        }

        img {
          margin-left: 7px;
        }
      }
    }
    &__right {
      display: none;
    
      @media screen and (min-width: em(768)){
        width: 63%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }

      &--accountLink {
        //margin-right: 24px;
        display: flex;
        flex-direction: row;
        color: white;
        text-decoration: none;
        @extend .val-font;
        align-items: center;
        font-size: 12px;
        height: 100%;

        &.router-link-active {
              opacity: 1;
              position: relative; 

              &:after {
                display: inline-block;
                content: '';
                width: 100%;
                position: absolute;
                bottom: 0px;
                height: 3px;
                left: 0px;
                background-color: white;
              }
            }
        // img {
        //   margin-left: 5px;
        //   width: 9px;
        //   margin-top: 1px;
        // }
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
          width: 22px;
          margin-left: 7px;
        }
      }
    }
  }

  .addonHeader {
    &__librarySearch {
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &--input {
        width: 90%;
        font-weight: 500;
        font-size: 23px;
        height: 80%;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        text-align: center;

        &::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }
      }
    }
    &__explorerSearch {
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &--input {
        width: 90%;
        font-weight: 500;
        font-size: 23px;
        height: 80%;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        text-align: center;

        &::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }
      }
    }
  }
</style>
