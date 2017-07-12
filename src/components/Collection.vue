<template>
  <section class="collection">
      <val-song></val-song>
  </section>
</template>

<script>
    import Song from './SongTpl.vue';

    export default {
        components: {
            valSong: Song
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/mixins.scss';

    .collection {
        width: 100%;
        margin-top: em(50);
    }
</style>
