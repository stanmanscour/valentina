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
      <div class="bottomBar__player__action">
        <a @click.prevent="togglePauseSong" v-if="!paused" href="#" class="bottomBar__player__action--play"><img src="/src/assets/icons/play.svg"></a>
        <a @click.prevent="togglePauseSong" v-if="paused" href="#" class="bottomBar__player__action--pause"><img src="/src/assets/icons/pause.svg"></a>
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
    <div class="bottomBar__playlist">
      <template v-if="playlist.length > 0">
        <h2 class="bottomBar__playlist--title">Titres à venir</h2>
        <div class="bottomBar__playlist--scroll">
          <table class="bottomBar__playlist__table">
            <thead>
              <tr>
                <th class="tableTitle">Titre</th>
                <th class="tableArtist">Artist</th>
                <!-- <th class="tableGenre">Genre</th> -->
                <th class="tableAddBy">Add by</th>
                <th class="tableCount">Count</th>
                <th class="tableAction">Action</th>
              </tr>
            </thead>
            <transition-group name="fade" tag="tbody"> <!-- tbody -->
              <tr v-for="(song, index) in playlist" :key="index">
              <td class="tableTitle"><p>{{ song.title }}</p></td>
              <td class="tableArtist"><p>{{ song.artist }}</p></td>
              <!-- <td class="tableGenre"><p>{{ song.genre }}</p></td> -->
              <td class="tableAddBy"><p>Me</p></td>
              <td class="tableCount"><p>{{ song.counter }}</p></td>
              <td class="tableAction"><a @click.prevent="removeFromPlaylist(song)" href="#"><img src="/src/assets/icons/delete.svg"></a></td>
              </tr>
            </transition-group>
          </table>
        </div>
      </template>
      <template v-else>
        <h2 class="bottomBar__playlist--title">Pas de titre à venir</h2>
      </template>
    </div>


    <div style="visibility: hidden;">
      <iframe v-if="currentSong.media === 'youtube'" class="player__youtube" id="ytplayer" type="text/html" width="300" height="300" :src="'https://www.youtube.com/embed/'+currentSong.src + '?rel=0&autoplay=1'" frameborder="0" />
      <iframe v-if="currentSong.media === 'soundcloud'" class="player__soundcloud" width="100%" height="450" scrolling="no" frameborder="no" :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+currentSong.src"></iframe>
    </div>
  </div>
</template>

<script>
  import { EventBus } from './../main';
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        playlistOpen: false,
        paused: false
      }
    },
    computed: {
      ...mapGetters({
        currentSong: 'getCurrentSong',
        playlist: 'getPlaylist'
      })
    },
    methods: {
      ...mapActions([
        'removeFromPlaylist'
      ]),
      togglePlaylist(){
        this.playlistOpen = !this.playlistOpen;
      },
      togglePauseSong(){
        this.paused = !this.paused;
        // inteligencia pour faire pause
      },
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

    &:before {
      content: none;
      opacity: 0;
      transition: all 3s ease;
    }

    &.active {
      transition: all .4s ease;
      height: 100%;

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

    &__playlist {

      &--title {
        @extend .val-font;
        color: white;
        font-size: 25px;
        line-height: 40px;
        margin-bottom: 10px;
      }
      &--scroll {
        height: 80vh;
        overflow-y: scroll;

        @media screen and (min-width: em(768)){
          height: 270px;
        }

        &::-webkit-scrollbar {
          height: 12px;
          width: 2px;
          background: #016752;
        }

        &::-webkit-scrollbar-thumb {
            background: #025645;
            -webkit-border-radius: 1ex;
            -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
        }

        &::-webkit-scrollbar-corner {
            background: #000;
        }
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
                font-size: 12px;
                margin-top: 10px;
                margin-bottom: 10px;

                
                @media screen and (min-width: em(768)){
                  font-size: 15px;
                }
              }
            }
          }
        }
        .tableTitle { }
        .tableArtist { }
        .tableGenre { }
        .tableAddBy {
          display: none;
          @media screen and (min-width: em(768)){
            display: table-cell;
          }
         }
        .tableCount {
          display: none;
          @media screen and (min-width: em(768)){
            display: table-cell;
          }
         }
        .tableAction { }
      }
    }
  }
</style>