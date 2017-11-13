<template>
	<main>

    <!-- header general app -->
    <top-header></top-header>

    <!--
    <template>
      <val-header></val-header>
      <transition name="fade">
        <val-formAdd :objSongInit="objSongInit" v-if="addFormVisible"></val-formAdd>
      </transition>
    </template>
    -->

    <!-- router view -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

      
     <!-- footer general app -->

    <template>
      <val-bottom-bar></val-bottom-bar>
      <val-menu-mobile></val-menu-mobile>
      <val-msg-error></val-msg-error>
    </template>
      
	</main>
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
  import Player from './Player.vue';
  import bottomBar from './BottomBar.vue';
  import FormAdd from './FormAdd.vue';
  import Header from './Header.vue';
  import MenuMobile from './MenuMobile.vue';
  import MsgError from './MsgError.vue';
  import TopHeader from './TopHeader.vue';

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
    computed: {
      ...mapGetters({

      }),
    },
    methods: {
      ...mapActions({
        showError: 'showError'
      }),
      
      // uploadOnDb(obj) {
      //   this.$http.post('https://valentina-7c291.firebaseio.com/songs.json', obj)
      //     .then(() => {
      //       this.getSongsFromDb();
      //     }, error => {
      //       this.showError('Pas de connexion');
      //     })
      // },

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
      valPlayer: Player,
      valFormAdd: FormAdd,
      valHeader: Header,
      valBottomBar: bottomBar,
      valMenuMobile: MenuMobile,
      valMsgError: MsgError,
      topHeader: TopHeader
    },

    created() {
  
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

  
</style>