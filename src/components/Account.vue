<template>
  <section class="val__account">
    <a @click.prevent="logout" class="val__account--logoutLink" href="#">Se déconnecter</a>
    <div class="val__account__reglages">
      <article class="val__account__reglages__personalInfo">
        <h1>Informations personnelles</h1>
        <div class="form-group-text">
          <label for="">Pseudonyme</label>
          <input type="text" v-model="user.pseudo" placeholder="Pseudonyme">
        </div>
        <div class="form-group-text">
          <label for="">Adresse email</label>
          <input type="text" v-model="user.email" placeholder="Adresse email">
        </div>
      </article>
      <article class="val__account__reglages__playlistConfig">
        <h1>Playlist</h1>
        <div class="form-group-checkbox">
          <label for="">Playlist privé</label>
          <input type="checkbox">
        </div>
      </article>
    </div>
  </div>
</section>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        user: 'user/getUser',
      })
    },
    methods: {
      logout(){
        this.$store.dispatch('logout/logout');
      }
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';
  
  .val__account {
    margin-top: 60px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: em(778)){
      width: 775px;
      margin-top: 75px;
      
    }

    &__reglages {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: em(778)){
        flex-direction: row;
        justify-content: space-between;
      }

        &__personalInfo,
        &__playlistConfig {
          width: 100%;
          padding: 20px;
          background-color: #019B7B;
          margin-bottom: 10px;

          @media screen and (min-width: em(778)){
            width: 49%;
          }
        }
    }

    &--logoutLink {
      margin-top: 20px;
      margin-bottom: 20px;
      @extend .val-font;
      font-size: 14px;
      color: white;
      text-decoration: none;
      display: inline-block;
      margin-left: 15px;

      @media screen and (min-width: em(778)){
        margin-left: 0px;
      }
    }

    h1 {
      @extend .val-font;
      color: white;
      font-size: 22px;
      padding-bottom: 20px;
      //font-weight: 600;
    }

    .form-group-text {
      display: flex;
      flex-direction: column;
    }

    .form-group-checkbox {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    label {
        @extend .val-font;
        color: white;
        font-size: 11px;
      }

      input[type="text"] {
        margin-top: 0px;
        margin-bottom: 15px;
        height: 30px;
        font-size: 13px;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.49);
        outline: none;
        color: white;
        
        &::placeholder {
          color: rgba(255, 255, 255, 0.49);
        }
      }

    

  }
</style>