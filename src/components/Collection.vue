<template>
    <section class="songCollection">

    <transition name="fade">
        <val-edit-song></val-edit-song>
    </transition>

    <template v-if="currentLibrary.songs == undefined || currentLibrary.songs == null">
        Il n'y a pas encore de musique, ajoutez-en.
    </template>
    <template v-else>
        <ul class="songCollection__collection" v-masonry transition-duration="0.3s" item-selector=".songCollection__collection__item">
            <li class="songCollection__collection__item" v-masonry-tile v-for="(song, index) in currentLibrary.songs" :style="{ height: calculateHeight(song.counter) }">
                <val-song :song="song" :index="index"></val-song>
            </li>
        </ul>
    </template>
    <template v-if="songCollection.length > 1">
        <ul class="songCollection__collection" v-masonry transition-duration="0.3s" item-selector=".songCollection__collection__item">
            <li class="songCollection__collection__item" v-masonry-tile v-for="(song, index) in songCollection" :style="{ height: calculateHeight(song.counter) }">
                <val-song :song="song" :index="index"></val-song>
            </li>
        </ul>
    </template>
    
        
        
    </section>
</template>

<script>
    import Vue from 'vue';
    import Song from './SongTpl.vue';
    import EditSong from './editSong.vue';
    import VueMasonryPlugin from 'vue-masonry';
    import { mapGetters } from 'vuex';
    
    Vue.use(VueMasonryPlugin);

    export default {
        components: {
            valSong: Song,
            valEditSong: EditSong
        },
        computed: {
            ...mapGetters({
                currentLibrary: 'librarySongs/getCurrentLibrary'
            })
        },
        methods: {
            getCount(){
                let songsCounter = [];
                let songsLogd = [];
                this.songCollection.forEach(song => {
                    songsCounter.push(song.counter);
                    songsLogd.push( Math.log(song.counter) );
                })
            },
            calculateHeight(counter){
                const y = 20;
                let calcul = 150 + y * Math.log(counter);
                return calcul + 'px';
            }
        },
        props: ['songCollection'],
        created() {
            this.getCount();
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/mixins.scss';
    .songCollection {
        margin-top: em(50);
        margin-left: 10px;
        margin-right: 10px;
        &__collection {
            box-sizing: border-box;
            margin-bottom: 70px;
            &__item {
                width: calc(50% - 20px);
                height: 170px;
                box-sizing: border-box;
                margin: 10px;
                @media screen and (min-width: em(600)) {
                    width: calc(33% - 20px);
                    height: 150px;
                }
                @media screen and (min-width: em(768)) {
                    width: calc(33% - 20px);
                    height: 200px;
                }
                @media screen and (min-width: em(1024)) {
                    width: calc(25% - 20px);
                    height: 200px;
                }
                @media screen and (min-width: em(1200)) {
                    width: calc(20% - 20px);
                }
            }
        }
    }
</style>
