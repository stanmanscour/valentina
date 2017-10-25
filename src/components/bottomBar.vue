<template>
  <div class="bottomBar">
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
        <a v-if="" href="#" class="bottomBar__player__action--play"><img src="/src/assets/icons/play.svg"></a>
        <a v-if="" href="#" class="bottomBar__player__action--playlist"><img src="/src/assets/icons/playlist.svg"></a>
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
  </div>
</template>

<script>
  import { EventBus } from './../main';

  export default {

  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .bottomBar {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    background-color: #007D63;
    width: 100%;

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

        &--play {
          img {
            height: 25px;
            width: 25px;
          }
        }
        &--playlist {
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