<template>
	<div>
		<val-header></val-header>
		  <transition name="fade">
      		<val-formAdd :objSongInit="objSongInit" v-if="addFormVisible"></val-formAdd>
    	</transition>
    
	    <div class="val__intro">
	      <h1 class="val__intro--title">valentina.io</h1>
	      <p class="val__intro--desc">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
	    </div>
	    
	    <val-collection :songCollection="songs"></val-collection>
      
      <val-bottom-bar></val-bottom-bar>
      <val-menu-mobile></val-menu-mobile>
      <val-msg-error></val-msg-error>
      
	</div>
</template>

<script>
  import {
    EventBus
  } from './../main';

  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
  
  // templates
  import Vue from 'vue';
  import Video from './Video.vue';
  import Collection from './Collection.vue';
  import Player from './Player.vue';
  import bottomBar from './BottomBar.vue';
  import FormAdd from './FormAdd.vue';
  import Header from './Header.vue';
  import MenuMobile from './MenuMobile.vue';
  import MsgError from './MsgError.vue';

  export default {
    data() {
      return {
        addFormVisible: false,
        song: null,
        fetchedSongs: [],
        songs: [],
        objSongInit: {},
  
        newSong: {
          counter: 0,
          artist: '',
          title: '',
          poster: '',
        }
      }
    },
    methods: {
      ...mapActions({
        showError: 'showError'
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
      uploadOnDb(obj) {
        this.$http.post('https://valentina-7c291.firebaseio.com/songs.json', obj)
          .then(() => {
            this.getSongsFromDb();
          }, error => {
            this.showError('Pas de connexion');
          })
      },

      showAddForm(obj) { // Fais apparaître le formulaire d'ajout de sons
        this.addFormVisible = true;
        this.objSongInit = obj;
      },
      closeAddForm() { // Ferme le formulaire d'ajout de sons
        this.addFormVisible = false;
        this.songSrc = '';
      },
      
      research(string) { // recherche dans la collection de musique

        var newArr = this.fetchedSongs.filter( item => {
          if ( item.title.toLowerCase().includes(string) 
               || item.artist.toLowerCase().includes(string)
            ){
            return item;
          }
        })

        if (newArr.length > 0){
          this.songs = newArr;
        } else {
          this.showError('pas de musiques comme ça ici bruh');
        }
      }
    },
    components: {
      valCollection: Collection,
      valPlayer: Player,
      valFormAdd: FormAdd,
      valHeader: Header,
      valBottomBar: bottomBar,
      valMenuMobile: MenuMobile,
      valMsgError: MsgError
    },

    created() {
      


      this.getSongsFromDb(); // get from firebase
  
      EventBus.$on('addFromHeader', newSong => { // ouvre le formulaire depuis le header
        this.showAddForm(newSong);
      })
  
      EventBus.$on('closeAddForm', this.closeAddForm); // ferme le formulaire d'ajout de sons
  
      EventBus.$on('uploadNewSong', obj => {
        this.uploadOnDb(obj);
      })
      
      EventBus.$on('research', research => { // recherche depuis le header;
        this.research(research);
      })
  
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixins.scss';

  .val__intro {
    margin-top: em(40);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: em(768)){
      margin-top: em(100);
    }

    &--title {
      font-size: em(45);
      @extend .val-font;
      color: white;
      font-weight: 500;
      text-align: center;
      line-height: 55px;
      @media screen and (min-width: em(1024)) {
        font-size: 80px;
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