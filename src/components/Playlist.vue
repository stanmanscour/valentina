<template>
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
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        playlist: 'playlist/getPlaylist'
      })
    },
    methods: {
      ...mapActions({
        removeFromPlaylist: 'playlist/removeFromPlaylist'
      })
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .bottomBar__playlist {

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
</style>