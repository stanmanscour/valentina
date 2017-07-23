<template>
    <div class="player">
        <iframe v-if="media === 'youtube'" class="player__youtube" id="ytplayer" type="text/html" width="300" height="300" :src="'https://www.youtube.com/embed/'+song.src + '?rel=0&autoplay=1'" frameborder="0" />
        <iframe v-if="media === 'soundcloud'" class="player__soundcloud" width="100%" height="450" scrolling="no" frameborder="no" :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+song.src+'&amp;auto_play=false&amp;&amp;color=0066cc'"></iframe>
    </div>
</template>

<script>
    import { EventBus } from './../main';

    export default {
        data: function() {
            return {
                media: null,
                song: null
            }
        },
        methods: {
            playSong(){
                this.media = this.song.media;
            }
        },
        created(){
            EventBus.$on('playThis', song => {
                this.song = song;
                this.playSong();
            })
        }
    }
</script>
 
<style lang="scss">
    @import './../assets/scss/mixins.scss';

    .player {
        &__youtube,
        &__soundcloud {
            opacity: 0;
            visibility: hidden;
            position: fixed;
            top: -400px;

            @media screen and (min-width: em(738)) {
                visibility: visible;
                position: fixed;
                width: 267px;
                top: inherit;
                height: 150px;
                left: 20px;
                bottom: 20px;
                opacity: .8;
                
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
</style>
 