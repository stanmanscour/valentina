<template>
  <div class="shadow" v-if="tplEditSongVisible">
    <div class="editSong">
      <h3 class="editSong--title">Edit this song</h3>
      <div class="editSong__form">
        <div class="editSong__form__item">
          <label class="editSong__form__item--label">Artiste:</label>
          <input class="editSong__form__item--input" type="text" :value="song.artist">
        </div>
        <div class="editSong__form__item">
          <label class="editSong__form__item--label">Titre:</label>
          <input class="editSong__form__item--input" type="text" :value="song.title">
        </div>
        <div class="editSong__form__item">
          <label class="editSong__form__item--label">Genre:</label>
          <input class="editSong__form__item--input" type="text" :value="song.genre">
        </div>
        <div class="editSong__form__poster">
          <div class="editSong__form__poster--img" :style="{ backgroundImage: `url('${song.poster}')` }"> 
            <!--  -->
          </div>
          <div class="editSong__form__poster__modify">
            <input type="file">
          </div>
        </div>
        <div class="editSong__form__submit">
          <a @click.prevent="hideTplEditSong" href="#">Annuler</a>
          <a href="#">Valider</a>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        tplEditSongVisible: 'getTplEditSongVisible',
        song: 'getEditSong'
      }),
    },
    methods: {
      ...mapActions([
        'hideTplEditSong'
      ])
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .shadow {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.67);
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    z-index: 650;
  }

  .editSong {
    border-radius: 2px;
    background-color: #026A54;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 700;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    padding: 25px;
    box-sizing: border-box;
    width: 90%;

    @media screen and (min-width: em(500)){
      width: 75%;
    }

    @media screen and (min-width: em(768)){
      width: 40%;
    }

    @media screen and (min-width: em(1024)){
      width: 30%;
    }

    &--title {
      @extend .val-font;
      text-align: center;
      color: white;
      font-size: 14px;
    }

    &__form {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      &__poster {
        margin-top: 20px;

        &--img {
          width: 133px;
          height: 133px;
          background-color: #005d49;
          border: 1px solid #025a48;
          background-size: cover;
        }
        &__modify {
          margin-top: 20px;
          input {

          }
        }
      }
      &__item {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        margin-top: 7px;
        margin-bottom: 7px;
        &--label {
          @extend .val-font;
          font-size: 12px;
          color: white;
        }
        &--input {
          @extend .val-font;
          font-size: 20px;
          width: 100%;
          margin-left: 10px;
          background-color: transparent;
          border: none;
          color: white;
        }
      }
      &__submit {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        a {
          color: white;
          @extend .val-font;
          font-size: 14px;
          text-decoration: none;
        }
      }
    }
  }
</style>