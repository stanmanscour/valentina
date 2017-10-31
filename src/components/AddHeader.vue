<template>
  <div class="addonHeader__add">
    
    <template v-if="stepUrl">
      <div class="addonHeader__add__step1">
        <div class="addonHeader__add__form">
          <input type="text" placeholder="Url de la musique">
        </div>
        <div class="addonHeader__add__action">
          <a @click.prevent="goInfo" href="#">Suivant <img src="src/assets/icons/right-arrow.svg"></a>
        </div>
      </div>
    </template>
    
    <template v-if="stepInfo">
      <div class="addonHeader__add__step2">
        <div class="addonHeader__add__form">
          <input type="text" placeholder="Artiste">
          <input type="text" placeholder="Titre">
          <input type="text" placeholder="Genre">
        </div>
        <div class="addonHeader__add__action">
          <a @click.prevent="goUrl" href="#"><img src="src/assets/icons/left-arrow.svg">Retour</a>
          <a @click.prevent="goPoster" href="#">Suivant<img src="src/assets/icons/right-arrow.svg"></a>
        </div>
      </div>
    </template>

    <template v-if="stepPoster">
      <div class="addonHeader__add__step3">
        <div class="addonHeader__add__image">
          <div class="addonHeader__add__image--showChoice"></div>
          <input class="addonHeader__add__image--input" type="file">
        </div>
        <div class="addonHeader__add__action">
          <a @click.prevent="goInfo" href="#"><img src="src/assets/icons/left-arrow.svg">Retour</a>
          <a href="#">Ajouter<img src="src/assets/icons/right-arrow.svg"></a>
        </div>
      </div>
    </template>
    
  </div>
</template>

<script> 
  export default {
    data(){
      return {
        stepUrl: true,
        stepInfo: false,
        stepPoster: false,
        newSong: {
          counter: 0,
          genre: '',
          artist: '',
          title: '',
          poster: '',
        }
      }
    },
    methods: {

      verifyUrl(){
        //
      },
      goUrl(){
        this.stepUrl = true;
        this.stepPoster = false,
        this.stepInfo = false;
      },
      goInfo(){
        this.stepUrl = false;
        this.stepPoster = false,
        this.stepInfo = true;
      },
      verifyInfo(){

      },
      goPoster(){
        this.stepUrl = false;
        this.stepInfo = false;
        this.stepPoster = true;
      },
      verifyPoster(){

      },
      addSong(){
        
      }
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .addonHeader__add {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (min-width: em(768)){
      width: 40%;
    }

    @media screen and (min-width: em(1024)){
      width: 30%;
    }

    &__form {
      display: flex;
      flex-direction: column;

      input {
        font-weight: 500;
        font-size: 23px;
        height: 50px;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;

        &::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }
      }
    }
    &__action {
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @extend .val-font;
        color: white;
        text-decoration: none;
          
        img {
          width: 15px;
          height: 15px;
          margin-left: 5px;
          margin-right: 5px;
        }
      }
    }
    &__step1 {
      .addonHeader__add__action a {
          margin-left: auto;
        }
    }
    // &__step2 {}
    &__step3 {
      .addonHeader__add__image {
        display: flex;
        flex-direction: row;
        width: 90%;
        margin-left: auto;
        margin-right: auto;

        &--showChoice {
          height: 120px;
          min-width: 120px;
          background-color: #005d49;
          border: 1px solid #025a48;
          background-size: cover;
          margin-right: 20px;
        }
        &__input {

        }
      }
    }
  }
</style>