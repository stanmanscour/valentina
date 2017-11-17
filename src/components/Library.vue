<template>
  <div>
	  <div class="val__intro">
	    <h1 class="val__intro--title">Ma bibliothèque</h1>
	    <p class="val__intro--desc">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
	  </div>
	  <val-collection :songCollection="songs"></val-collection>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Collection from './Collection.vue';

  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    components: {
      valCollection: Collection
    },
    data(){
      return {
        fetchedSongs: []
      }
    },
    computed: {
      ...mapGetters({
        getLibrarySongs: 'librarySongs/getLibrarySongs'
      })
      
    },
    methods: {
      ...mapActions({
        initLibrary: 'librarySongs/initLibrary'
      }),
      getSongsFromDb() { // fetch songs from the db
        this.fetchedSongs = [];
        this.$http.get('https://valentina-7c291.firebaseio.com/songs.json').then(response => {
          return response.json();
        }).then(data => {
          //this.fetchedSongs.push(data);
          for (let key in data) {
            this.fetchedSongs.push(data[key])
          }
        });

        this.songs = this.fetchedSongs;
      },
    },
    created(){
      this.getSongsFromDb();

      let vm = this;
      setTimeout(vm.initLibrary, 4000);
      setTimeout(function(){
        console.log(vm.getLibrarySongs);
      }, 6000);
      //this.fetchSongs();
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .val__intro {
    margin-top: em(80);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: em(768)){
      margin-top: em(100);
    }

    &--title {
      font-size: em(35);
      @extend .val-font;
      color: white;
      font-weight: 500;
      text-align: center;
      line-height: 55px;
      @media screen and (min-width: em(1024)) {
        font-size: 70px;
        line-height: 80px;
      }
    }
    &--desc {
      line-height: 22px;
      font-size: 14px;
      @extend .val-font;
      margin-bottom: 0px;
      color: rgba(255, 255, 255, 0.5);
      text-align: center;
      font-weight: 300;
      max-width: 500px;
    }
  }
</style>