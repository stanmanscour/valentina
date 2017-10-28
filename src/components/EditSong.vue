<template>
  <div class="shadow">
  <div class="editSong">
    <h3 class="editSong--title">Edit this song</h3>
    <div class="editSong__form">
      <div class="editSong__form__item">
        <label class="editSong__form__item--label">Artiste:</label>
        <input class="editSong__form__item--input" type="text" value="Lala &ce 667">
      </div>
      <div class="editSong__form__item">
        <label class="editSong__form__item--label">Artiste:</label>
        <input class="editSong__form__item--input" type="text" value="Lala &ce 667">
      </div>
      <div class="editSong__form__item">
        <label class="editSong__form__item--label">Artiste:</label>
        <input class="editSong__form__item--input" type="text" value="Lala &ce 667">
      </div>
    </div>

  </div>
    
    
  </div>
</template>

<script>

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
    width: 360px;
    height: 400px;
    z-index: 700;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    padding: 25px;

    &--title {
      @extend .val-font;
      text-align: center;
      color: white;
      font-size: 14px;
    }

    &__form {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      &__item {
        display: flex;
        flex-direction: row;
        &--label {

        }
        &--input {

        }
      }
    }
  }
</style>