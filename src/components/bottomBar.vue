<template>
  <div class="bottomBar">
    <div class="bottomBar__player">
      <img class="bottomBar__player--poster" src="#">
      <div class="bottomBar__player__names">
        <p class="bottomBar__player__names--title">Girl like you</p>
        <span> - </span> 
        <p class="bottomBar__player__names--artist">Toro y moi</p>
      </div>
      <div class="bottomBar__player__action">
        <a v-if="" href="#" class="bottomBar__player__action--play"><img src="/src/assets/icons/play.svg"></a>
        <a v-if="" href="#" class="bottomBar__player__action--playlist"><img src="/src/assets/icons/playlist.svg"></a>
        
      </div>
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
    height: 60px;
    background-color: #007D63;
    width: 100%;

    &__player {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 15px;
      padding-right: 15px;

       @media screen and (min-width: em(768)){
         width: 40%;
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
          font-size: 12px;
          line-height: 15px;
        }
        &--artist {
          font-size: 12px;
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
  }
</style>