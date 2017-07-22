<template>
  <div id="app" class="val">
    <val-header></val-header>
    <div class="val__intro">
      <h1 class="val__intro--title">prenom.io</h1>
      <p class="val__intro--desc">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      <div class="testingDb">
  
        <form>
          <label>artist</label>
          <input type="text" v-model="newSong.artist">
          <label>title</label>
          <input type="text" v-model="newSong.title">
          <input type="submit" @click.prevent="submitDb">
        </form>
  
      </div>
    </div>
    <val-collection :songCollection="songCollection"></val-collection>
    <transition name="fade">
      <val-player :song="song" v-if="listening"></val-player>
    </transition>
  
  
  
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
  
  
  export default {
    name: 'app',
    data() {
      return {
        songCollection: Songs,
  
        // var
        listening: false,
        song: null,
        newSong: {
          counter: 0,
          artist: '',
          title: '',
          src: '',
          poster: '',
          media: ''
        }
      }
    },
    methods: {
      listenTo(song) {
        EventBus.$emit('playThis', song);
        this.listening = true;
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
      valPlayer: Player
    },
    created() {
      EventBus.$on('listenToThis', song => {
        this.listenTo(song);
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
</style>
