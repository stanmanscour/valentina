<template>
  <youtube 
    @playing="isPlaying"
    @ready="isReady"
    @paused="isPaused"
    @ended="isEnded"
    :player-vars="{ autoplay: 1 }"
    :video-id="song.src">
    </youtube>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  import VueYouTubeEmbed from 'vue-youtube-embed'
  import Vue from 'vue';
  Vue.use(VueYouTubeEmbed)

  export default {
    data(){
      return {
        paused: false
      }
    },
    computed: {
      ...mapGetters({
        song: 'player/getCurrentSong',
        player: 'player/player'
      })
    },
    methods: {
      isReady(player){
        this.$store.dispatch('youtubePlayer/ready', player);
      },
      isPlaying(){
        this.$store.dispatch('player/playing');
      },
      isPaused(){
        this.$store.dispatch('player/paused');
      },
      isEnded() {
        this.$store.dispatch('player/ended');
      }
    }
  }
</script>