<template>
    <div>
        <div v-if="media" class="player">
            <a @click.prevent="closeSong" class="player--closeBtn"><img src="/src/assets/icons/closePlayer.svg"></a>
            <iframe v-if="media === 'youtube'" class="player__youtube" id="ytplayer" type="text/html" width="300" height="300" :src="'https://www.youtube.com/embed/'+song.src + '?rel=0&autoplay=1'" frameborder="0" />
            <iframe v-if="media === 'soundcloud'" class="player__soundcloud" width="100%" height="450" scrolling="no" frameborder="no" :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+song.src"></iframe>
        </div>
    </div>
</template>

<script>
    import { EventBus } from './../main';

    export default {
        data: function() {
            return {
                media: true,
                song: null
            }
        },
        methods: {
            playSong(){
                this.media = this.song.media;
                console.log(this.song);
            },
            closeSong(){
                this.media = 0;
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
        
        &--closeBtn {
            position: absolute;
            right: -15px;
            top: -15px;
            transition: all .2s ease;

            img {
                height: 30px;
                width: 30px;
                transition: all .2s ease;
            }

            &:hover {
                cursor: pointer;
                right: -22.5px;
                top: -22.5px;

                img {
                    height: 45px;
                    width: 45px;
                }
            }
        }

        &__soundcloud,
        &__youtube {
            width: 100%;
            height: 100%;
        }
    }
</style>
 