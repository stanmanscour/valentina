<template>
  <div class="bottomBar" :class="{ active: playlistOpen }">
    
    <div class="bottomBar__player">
      <img class="bottomBar__player--poster" :src="currentSong.poster">
      <div class="bottomBar__player__names">
        <p>
          <span class="bottomBar__player__names--title">{{ currentSong.title }}</span>
           - 
          <span class="bottomBar__player__names--artist">{{ currentSong.artist }}</span>
        </p>
      </div>
      <a href="#" class="bottomBar__player__link">youtube</a>
      <div class="bottomBar__player__action">
        
        <a @click.prevent="resume" v-if="isPaused && !isPlaying" href="#" class="bottomBar__player__action--play"><img src="/src/assets/icons/play.svg"></a>
        <a @click.prevent="pause" v-if="isPlaying" href="#" class="bottomBar__player__action--pause"><img src="/src/assets/icons/pause.svg"></a>
        
        
        <a @click.prevent="togglePlaylist" href="#" class="bottomBar__player__action__playlist">
          <template v-if="playlist.length > 0">
            <transition name="fade">
            <span class="bottomBar__player__action__playlist--notif">{{ playlist.length }}</span>
            </transition>
          </template>
          <img src="/src/assets/icons/playlist.svg">
        </a>
      </div>
    </div>

    <val-playlist></val-playlist>

    <div class="bottomBar__iframe" style="visibility: hidden;"> <!--  -->
      <val-youtube-player v-if="currentSong.media === 'youtube'"></val-youtube-player>
      <val-soundcloud-player v-if="currentSong.media === 'soundcloud'"></val-soundcloud-player>
      
      <!-- <iframe class="player__youtube" id="ytplayer" type="text/html" width="300" height="300" :src="'https://www.youtube.com/embed/'+currentSong.src + '?rel=0&autoplay=1'" frameborder="0" /> -->
      <iframe v-if="currentSong.media === 'soundcloud'" class="player__soundcloud" width="100%" height="450" scrolling="no" frameborder="no" :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+currentSong.src"></iframe>
    </div>
  </div>
</template>

<script>
  import { EventBus } from './../main';
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  import SoundcloudPlayer from './player/SoundcloudPlayer.vue'
  import YoutubePlayer from './player/YoutubePlayer.vue'
  import Playlist from './Playlist.vue';

  export default {
    data() {
      return {
        playlistOpen: false
      }
    },
    computed: {
      ...mapGetters({
        currentSong: 'player/getCurrentSong',
        playlist: 'playlist/getPlaylist',
        isPlaying: 'player/isPlaying',
        isPaused: 'player/isPaused'
      })
    },
    methods: {
      ...mapActions({
        pause: 'youtubePlayer/pause',
        resume: 'youtubePlayer/resume'
      }),
      togglePlaylist(){
        this.playlistOpen = !this.playlistOpen;
      }
    },
    components: {
      valPlaylist: Playlist,
      valYoutubePlayer: YoutubePlayer,
      valSoundcloudPlayer: SoundcloudPlayer
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .bottomBar {
    z-index: 400;
    position: fixed;
    height: 60px;
    bottom: 60px;
    left: 0px;
    right: 0px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    background-color: #007D63;
    width: 100%;
    transition: all .4s ease;

    &:before {
      content: none;
      opacity: 0;
      transition: all 3s ease;
    }

    @media screen and (min-width: em(768)){
      bottom: 0px;
    }

    &.active {
      transition: all .4s ease;
      height: 90%;

      @media screen and (min-width: (em(768))){
        height: 380px;
      }

      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.56);
        top: -100%;
        left: 0px;
        opacity: 1;
       // transition: all .4s ease;
      }
    }

    &__player {
      height: 60px;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

       @media screen and (min-width: em(768)){
        // width: 40%;
       }

      &--poster {
        width: 33px;
        height: 33px;
      }
      &__names {
        margin-left: 12px;
        color: white;
        @extend .val-font;
        display: flex;
        flex-direction: row;

        &--title {
          font-size: 15px;
          line-height: 15px;
        }
        &--artist {
          font-size: 15px;
          font-weight: 200;
          line-height: 15px;
        }
      }
      &__link {
        display: none;
        @extend .val-font;
        color: #024f3f;

        @media screen and (min-width: em(768)){
          display: inline;
          margin-top: 3px;
          font-size: 13px;
          margin-left: 7px;
          text-decoration: none;
        }
      }
      &__action {
        margin-left: auto;
        display: flex;
        flex-direction: row;

        &--play {
          width: 25px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; 
          
          img {
            height: 25px;
            width: 25px;
          }
        }
        &--pause {
          width: 25px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          img {
            width: 11px;
            height: 25px;
          }
        }
        &__playlist {
          width: 25px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: 7px;

          &--notif {
            position: absolute;
            color: white;
            text-align: center;
            font-size: 12px;
            @extend .val-font;
            width: 16px;
            text-decoration: none;
            height: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #FF5722;
            top: 2px;
            border-radius: 100%;
          }

          img {
            height: 25px;
            width: 22px;
          }
        }
      }
    }
    &__iframe {
      position: absolute;
      top: -500px;
    }
  }
</style>