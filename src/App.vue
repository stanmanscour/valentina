<template>
  <div id="app" class="val">
    <val-header></val-header>
    <transition name="fade">
      <val-formAdd v-if="addFormVisible"></val-formAdd>
    </transition>
    <div class="val__intro">
      <h1 class="val__intro--title">prenom.io</h1>
      <p class="val__intro--desc">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
    </div>
    <val-collection :songCollection="songCollection"></val-collection>
    <transition name="fade">
      <val-player :song="song" v-if="listening"></val-player>
    </transition>
    <div v-if="errorVisible" class="val__info">
      <p class="val__info--errorMsg">{{ errorMsg }}</p>
      <a class="val__info--close" href="#" @click="closeError">
        <img src="#">
      </a>
    </div>
  
  
  
  </div>
</template>

<script>
  import {
    EventBus
  } from './main';
  import {
    Songs
  } from './songs.js';
  
  // templates
  import Vue from 'vue';
  import Video from './components/Video.vue';
  import Header from './components/Header.vue';
  import Collection from './components/Collection.vue';
  import Player from './components/Player.vue';
  import FormAdd from './components/FormAdd.vue';
  
  
  export default {
    name: 'app',
    data() {
      return {
        songCollection: Songs,
  
        // var
        listening: false,
        addFormVisible: false,
        song: null,
        errorVisible: false,
        errorMsg: '',
        
        newSong: {
          counter: 0,
          artist: '',
          title: '',
          poster: '',
        }
      }
    },
    methods: {
      listenTo(song) {
        EventBus.$emit('playThis', song);
        this.listening = true;
      },
      showError(string) { // Affiche les erreurs reçus par l'Event Bus
        this.errorMsg = string;
        this.errorVisible = true;
      },
      closeError(){
        this.errorVisible = false;
      },
      showAddForm(obj) {
        console.log('showAddForm');
        this.addFormVisible = true;
        EventBus.$emit('createAddForm', obj);
      },
      submitDb() {
        this.$http.post('https://valentina-7c291.firebaseio.com/data.json', this.newSong)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          })
      }
    },
    components: {
      valHeader: Header,
      valCollection: Collection,
      valPlayer: Player,
      valFormAdd: FormAdd
    },
    created() {
      EventBus.$on('listenToThis', song => {
        this.listenTo(song);
      })
      EventBus.$on('addFromHeader', newSong => {
        this.showAddForm(newSong);
      })
      EventBus.$on('error', error => {
        this.showError(error);
      })
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/reset.scss';
  @import './assets/scss/mixins.scss';
  body {
    background-color: #00A885;
  }
  
  .val__intro {
    margin-top: em(100);
    width: 100%;
    &--title {
      font-size: em(45);
      @extend .val-font;
      color: white;
      font-weight: 500;
      text-align: center;
      line-height: 55px;
      @media screen and (min-width: em(1024)) {
        font-size: 80px;
        line-height: 80px;
      }
    }
    &--desc {
      line-height: 22px;
      font-size: 14px;
      @extend .val-subFont;
      margin-bottom: 0px;
      color: white;
      text-align: center;
      font-weight: 300;
    }
  }

  .val__info {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FD5B5B;
    padding-left: 30px;
    padding-right: 30px;

    &--errorMsg {
      @extend .val-font;
      color: white;
      font-size: 13px;
      line-height: 18px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    &--close {
      margin-left: 10px;
    }
  }
</style>
