<template>
  <div id="app" class="val">
    <val-header></val-header>
    <div class="val__intro">
      <h1 class="val__intro--title">prenom.io</h1>
      <p class="val__intro--desc">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
    </div>
    <val-collection></val-collection>
    <ul class="val__container" v-masonry transition-duration="0.3s" item-selector=".val__container">
      <li v-masonry-tile v-for="video in videos" class="val__container" style="width:20%; padding: 15px; box-sizing: border-box;">
        <!--<val-video :video="video"></val-video>-->
      </li>
    </ul>
  
  
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueMasonryPlugin from 'vue-masonry';
  import Video from './components/Video.vue';
  import Header from './components/Header.vue';
  import Collection from './components/Collection.vue';
  
  Vue.use(VueMasonryPlugin)
  
  export default {
    name: 'app',
    data() {
      return {
        videos: [{
            counter: 20,
            title: 'Sir Doums - Pourquoi pas',
            src: 'https://www.youtube.com/embed/VGHqJh4GrFc?list=UUaW8nWryLD0TunnyUYqp5dQ',
            poster: 'http://f0315463488d2921b56f-77a5fe26cae7cb35bb07eccfb28cee77.r87.cf3.rackcdn.com/romancieslewicz/_1600xAUTO_crop_center-center_75/Cieslewicz_02.jpg'
          },
          {
            counter: 11,
            title: 'Babeaheaven - Friday Sky',
            src: 'https://www.youtube.com/embed/VGHqJh4GrFc?list=UUaW8nWryLD0TunnyUYqp5dQ',
            poster: 'https://lopf.s3.amazonaws.com/uploads/uploads/28/f0c9867f-f56d-4489-b9e7-5c6371fe4f36_l.jpeg'
          },
          {
            counter: 33,
            title: 'Arcade Fire - Song on the beach',
            src: 'https://www.youtube.com/embed/VGHqJh4GrFc?list=UUaW8nWryLD0TunnyUYqp5dQ',
            poster: 'https://img.nowness.com/nowness-frontend/jRYBnRnjSLSrnUMGLXCW_Screen%20Shot%202017-05-25%20at%2010.33.45.jpg'
          },
          {
            counter: 10,
            title: 'Robb Bank$ - Get it how you live',
            src: '',
            poster: 'http://itoshiro.org/wp-content/uploads/2017/04/topfin-1-768x768.jpg'
          },
          {
            counter: 5,
            title: 'One self - Blue bird',
            src: '',
            poster: 'http://eallin.com/wp-content/uploads/2017/04/HONEY_BADGER-1000x400.jpg'
          },
          {
            counter: 12,
            title: 'Vaati - Goodbye ft Nusky',
            src: 'https://www.youtube.com/embed/VGHqJh4GrFc?list=UUaW8nWryLD0TunnyUYqp5dQ',
            poster: 'https://lopf.s3.amazonaws.com/uploads/uploads/28/f0c9867f-f56d-4489-b9e7-5c6371fe4f36_l.jpeg'
          },
          {
            counter: 22,
            title: 'Jax Jones - House work',
            src: 'https://www.youtube.com/embed/VGHqJh4GrFc?list=UUaW8nWryLD0TunnyUYqp5dQ',
            poster: 'https://img.nowness.com/nowness-frontend/jRYBnRnjSLSrnUMGLXCW_Screen%20Shot%202017-05-25%20at%2010.33.45.jpg'
          },
          {
            counter: 20,
            title: 'SDA - Vous êtes un arbre',
            src: '',
            poster: 'http://www.maisonnue.com/thumbs/work/mn-records/m-klasson-mnrecords_forever-ep_digital2-500-82fbd83d3ade.png'
          },
          {
            counter: 3,
            title: 'Témé Tan "Améthis"',
            src: '',
            poster: 'http://itoshiro.org/wp-content/uploads/2017/04/topfin-1-768x768.jpg'
          },
          {
            counter: 2,
            title: 'Mike G - Forest Green',
            src: '',
            poster: 'http://eallin.com/wp-content/uploads/2017/04/HONEY_BADGER-1000x400.jpg'
          },
          {
            counter: 7,
            title: 'Shaka Bundy - Penny Penny ',
            src: '',
            poster: 'http://www.maisonnue.com/thumbs/work/mn-records/m-klasson-mnrecords_forever-ep_digital2-500-82fbd83d3ade.png'
          }
        ]
      }
    },
    methods: {
      // fetchData() {
      //   this.$http.get('http://www.youtube.com/oembed?url=http%3A//youtube.com/watch%3Fv%3DM3r2XDceM6A&format=json')
      //     .success(response => {
      //       console.log(response);
      //     })
      // }
    },
    created() {
      //this.fetchData();
    },
    components: {
      valVideo: Video,
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
