<template>
  <div class="bottomBar" :class="{ active: playlistOpen }">
    
    <div class="bottomBar__player">
      <img class="bottomBar__player--poster" src="#">
      <div class="bottomBar__player__names">
        <p>
          <span class="bottomBar__player__names--title">Girl like you</span>
           - 
          <span class="bottomBar__player__names--artist">Toro y moi</span>
        </p>
      </div>
      <div class="bottomBar__player__action">
        <a @click="togglePauseSong" v-if="!paused" href="#" class="bottomBar__player__action--play"><img src="/src/assets/icons/play.svg"></a>
        <a @click="togglePauseSong" v-if="paused" href="#" class="bottomBar__player__action--pause"><img src="/src/assets/icons/pause.svg"></a>
        <a @click="togglePlaylist" href="#" class="bottomBar__player__action--playlist"><img src="/src/assets/icons/playlist.svg"></a>
      </div>
    </div>
    <div class="bottomBar__playlist">
      <h2 class="bottomBar__playlist--title">Titres à venir</h2>
      <table class="bottomBar__playlist__table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Add by</th>
            <th>Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>Girl like you</p></td>
            <td><p>Toro y moi</p></td>
            <td><p>Electronic</p></td>
            <td><p>Stan</p></td>
            <td><p>233</p></td>
            <td><p>X</p></td>
          </tr>
          <tr>
            <td><p>Sauvagerie #1</p></td>
            <td><p>Kalash Criminel</p></td>
            <td><p>Rap</p></td>
            <td><p>Stan</p></td>
            <td><p>23</p></td>
            <td><p>X</p></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="visibility: hidden;">
      <iframe v-if="media === 'youtube'" class="player__youtube" id="ytplayer" type="text/html" width="300" height="300" :src="'https://www.youtube.com/embed/'+song.src + '?rel=0&autoplay=1'" frameborder="0" />
      <iframe v-if="media === 'soundcloud'" class="player__soundcloud" width="100%" height="450" scrolling="no" frameborder="no" :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+song.src"></iframe>
    </div>
  </div>
</template>

<script>
  import { EventBus } from './../main';

  export default {
    data() {
      return {
        playlistOpen: false,
        media: true,
        song: null,
        playlist: [],
        paused: false
      }
    },
    methods: {
      togglePlaylist(){
        this.playlistOpen = !this.playlistOpen;
      },
      playSong(){
        this.media = this.song.media;
        console.log(this.song);
      },
      togglePauseSong(){
        this.paused = !this.paused;
        // inteligencia pour faire pause
      },
      closeSong(){
        this.media = 0;
      }
    },
    created(){
      EventBus.$on('playThis', song => {
        this.song = song;
        this.playSong();
      })
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .bottomBar {
    z-index: 400;
    position: fixed;
    height: 60px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    background-color: #007D63;
    width: 100%;
    transition: all .4s ease;

    &.active {
      transition: all .4s ease;
      height: 100px;

      @media screen and (min-width: (em(768))){
        height: 380px;
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
        &--playlist {
          width: 25px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: 7px;
          
          img {
            height: 25px;
            width: 22px;
          }
        }
      }
    }

    &__playlist {
      &--title {
        @extend .val-font;
        color: white;
        font-size: 25px;
        line-height: 40px;
        margin-bottom: 10px;
      }
      &__table {
        width: 100%;

        thead {
          
          tr {
            height: 26px;
            height: 20px;
            margin-bottom: 5px;
          }

          th {
            text-align: left;
            text-transform: uppercase;
            @extend .val-font;
            color: rgba(236, 236, 236, 0.4);
            font-size: 11px;
          }
        }
        tbody {
          

          tr {

            &:hover {
              background-color: #0a896f;
            }

            td {
              p {
                color: white;
                @extend .val-font;
                font-size: 15px;
                margin-top: 10px;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>