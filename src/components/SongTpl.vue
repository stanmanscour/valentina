<template>
    <article :class="{'active': songHovered}" @mouseover="hoverSong(true)" @mouseout="hoverSong(false)" class="song">
        <div class="song__info">
            <div class="song__info__title">
                <p class="song__info__title--name">Bright</p>
                <p class="song__info__title--artist">Lala</p>
            </div>
            <div class="song__info__more">
                <span class="song__info__more--counter">23</span>
                <span class="song__info__more--time">2:45</span>
            </div>
        </div>
        <div class="song__action">
            <a href="#"><img src="/src/assets/icons/play.svg"></a>
        </div>
    </article>
</template>

<script>
    export default {
        data: function() {
            return {
                songHovered: false
            }
        },
        methods: {
            hoverSong(boolean) {
                this.songHovered = boolean;
            }
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/mixins.scss';
    .song {
        width: 200px;
        height: 200px;
        background-color: palevioletred;
        display: flex;
        flex-direction: row;
        padding: 14px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
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
                    font-size: 23px;
                }
                &--artist {
                    @extend .val-font;
                    color: white;
                    font-size: 18px;
                    margin-top: 4px;
                    margin-bottom: 4px;
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
        &__action {
            position: absolute;
            right: 25px;
            bottom: -45px;
            height: 38px;
            width: 38px;
            opacity: 0;
            transition: all .3s ease;
        }
        &.active {
            .song__info__title {
                bottom: 30px;
                
            }
            .song__action {
                bottom: 30px;
                opacity: 1;
            }
            .song__info__more {
                bottom: 15px;
                opacity: 1;
            }
        }
    }
</style>
