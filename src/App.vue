<template>
  <div id="app" class="val">
    <val-header></val-header>
    <div class="val__intro">
      <h1 class="val__intro--title">prenom.io</h1>
      <p class="val__intro--desc">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
    </div>
    <val-collection :songCollection="songCollection"></val-collection>
    <ul class="val__container" v-masonry transition-duration="0.3s" item-selector=".val__container">
      <!-- <li v-masonry-tile v-for="video in videos" class="val__container" style="width:20%; padding: 15px; box-sizing: border-box;">
        <val-video :video="video"></val-video>
      </li> -->
    </ul>
  
  
  </div>
</template>

<script>

  import { Songs } from './songs.js';

  // templates
  import Vue from 'vue';
  import Video from './components/Video.vue';
  import Header from './components/Header.vue';
  import Collection from './components/Collection.vue';

  
  export default {
    name: 'app',
    data() {
      return {
        songCollection: Songs
      }
    },
    methods: {

    },
    components: {
      valHeader: Header,
      valCollection: Collection
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

      @media screen and (min-width: em(1024)){
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
