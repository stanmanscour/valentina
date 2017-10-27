<template>
    <article :class="{'active': songHovered}" @mouseover="hoverSong(true)" @mouseout="hoverSong(false)" class="song">
        <div class="song__info">
            <div class="song__background" :style="{ backgroundImage: `url('${song.poster}')` }"></div>
            <div class="song__shadow"></div>
            <div class="song__info__title">
                <p class="song__info__title--name">{{ song.title }}</p>
                <p class="song__info__title--artist">{{ song.artist }}</p>
            </div>
            <div class="song__info__more">
                <span class="song__info__more--counter">{{ song.counter }}</span>
                <span class="song__info__more--time">2:45</span>
            </div>
        </div>
        <!--<template v-if="checkIntoPlaylist(song)">
           <a href="#" @click.prevent="removeFromPlaylist(song)" class="song__actionTimeline">
                <img src="/src/assets/icons/playlistCheck.svg">
                {{ checkIntoPlaylist(song) }}
            </a>
        </template>
        -->
        <template> <!-- v-else -->
             <a href="#" @click.prevent="addToPlaylist(song)" class="song__actionTimeline">
                <img src="/src/assets/icons/playlist.svg">
            </a>
        </template>
        <a href="#" @click.prevent="playThisSong(song)" class="song__actionPlay" >
            <img src="/src/assets/icons/play.svg">
        </a>
    </article>
</template>

<script>
    import { EventBus } from './../main';
    import { mapActions } from 'vuex';

    export default {
        data: function() {
            return {
                songHovered: false,
                //isInPlaylist: false
            }
        },
        props: ['song', 'index'],
        computed: {
            //isInPlaylist: checkIntoPlaylist
        },
        methods: {
            ...mapActions([
                'playThisSong',
                'addToPlaylist',
                'removeFromPlaylist',
                'checkIntoPlaylist'
            ]),
            hoverSong(boolean) {
                this.songHovered = boolean;
            },
            // addToPlaylist(){
            //     EventBus.$emit('addToPlaylist', this.song);
            //     this.isInPlaylist = true;
            // },
            // removeFromPlaylist(){
            //     EventBus.$emit('removeFromPlaylist', this.song);
            //     this.isInPlaylist = false;
            // },
            play(){
                EventBus.$emit('listenToThis', this.song);
            }
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/mixins.scss';
    .song {
        border-radius: 2px;
        transition: opacity .3s ease;
        opacity: 0.8;
        // margin: 10px;
        width: 100%;
        height: 100%;
        background-color: palevioletred;
        display: flex;
        flex-direction: row;
        padding: 14px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        //width: 50%;
        @media screen and (min-width: 768px) {}
        &__background {
            transition: all .3s ease;
            filter: brightness(40%);
            background-size: cover;
            position: absolute;
            left: 0px;
            top: 0px;
            bottom: 0px;
            right: 0px;
        }
        &__info {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 60%;
            &__title {
                position: absolute;
                bottom: 15px;
                transition: all .3s ease;
                &--name {
                    @extend .val-font;
                    color: white;
                    font-size: 19px;
                    line-height: 23px;
                    @media screen and (min-width: em(768)) {
                        font-size: 23px;
                        line-height: 28px;
                    }
                }
                &--artist {
                    @extend .val-font;
                    color: white;
                    font-size: 13px;
                    margin-top: 4px;
                    margin-bottom: 4px;

                    @media screen and (min-width: em(768)){
                        font-size: 18px;
                    }
                }
            }
            &__more {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                transition: all .3s ease;
                position: absolute;
                bottom: -15px;
                opacity: 0;
                width: 50%;
                &--counter {
                    @extend .val-font;
                    font-size: 12px;
                    color: white;
                }
                &--time {
                    @extend .val-font;
                    font-size: 12px;
                    color: white;
                }
            }
        }
        &__actionPlay {
            z-index: 30;
            position: absolute;
            right: 15px;
            bottom: -45px;
            height: 38px;
            width: 38px;
            opacity: 0;
            transition: all .3s ease;
            &:hover {
                transform: scale(1.2);
                cursor: pointer;
            }
            img {
                width: 100%;
            }
        }
        &__actionTimeline {
            width: 23px;
            height: 23px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 21px;
            bottom: 23px;
            opacity: 0;
            transition: all .4s ease;
            //transition: opacity .3s ease;
        }
        &__shadow {
            position: absolute;
            filter: blur(1px);
            left: -30px;
            right: -30px;
            background-color: rgba(0, 0, 0, 0.17);
            bottom: -50px;
            height: 50px;
            opacity: 0;
            transition: all .3s ease;
        }
        &.active {
            opacity: 1;
            .song__background {
                filter: brightness(70%);
            }
            .song__info__title {
                bottom: 30px;
                text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.48)
            }
            .song__actionPlay {
                bottom: 15px;
                opacity: 1;
            }
            .song__actionTimeline {
                bottom: 60px;
                opacity: 1;
            }
            .song__info__more {
                bottom: 15px;
                opacity: 1;
            }
            .song__shadow {
                opacity: 1;
                bottom: -10px;
                filter: blur(14px);
            }
        }
    }
</style>
