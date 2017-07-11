<template>
    <article class="video">
        <span class="video--delete hover-icon"><a title="delete"><img src="src/assets/icons/delete.svg" alt=""></a></span>
        <div v-if="!isWatching" class="video-poster" :style="{height: counterHeight}">
            <span class="video-poster--play hover-icon"><a title="play"><img src="src/assets/icons/play.svg" alt=""></a></span>
            <a @click.stop="toggleVideo">
                <img class="video-poster--image" :src="video.poster" alt="">
            </a>
        </div>
        <div v-if="isWatching" class="video__player" :style="{height: counterHeight}">
            <iframe :src="video.src" frameborder="0" allowfullscreen>
                                  </iframe>
        </div>
        <div class="video__desc">
            <p class="video__desc--name">{{ video.title }}</p>
            <div class="video__desc__status">
                <p class="video__desc__status--counter">23</p>
                <p class="video__desc__status--length">3:34</p>
                <span class="video__desc__status--edit hover-icon"><a title="edit"><img src="src/assets/icons/edit.svg" alt=""></a></span>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        data: function() {
            return {
                isWatching: false,
                normalHeight: 170,
                counterHeight: '190px'
            }
        },
        props: ['video'],
        methods: {
            toggleVideo() {
                this.isWatching = true;
            },
            getCounterHeight() {
                var count = this.video.counter;
                this.counterHeight = 170 + count + 'px';
            }
        },
        created() {
            this.getCounterHeight();
        }
    }
</script>

<style scoped lang="scss">
    .video {
        width: 100%;
        border-bottom: 4px solid white;
        //margin: 20px;
        position: relative;
        .video--delete {
            position: absolute;
            opacity: 0;
            right: -10px;
            top: -10px;
            z-index: 10;
            &:hover {
                cursor: pointer;
            }
            img {
                height: 29px;
            }
        }
        &__player {
            // width: 190px;
            //height: 190px;
            overflow: hidden;
        }
        .video-poster {
            overflow: hidden;
            position: relative;
            &--image {
                min-height: 190px;
                // min-width: 190px;
                width: initial;
            }
            &--play {
                opacity: 0;
                z-index: 10;
                position: absolute;
                width: 60px;
                left: 50%;
                top: 50%;
                margin-left: -30px;
                margin-top: -30px;
                &:hover {
                    cursor: pointer;
                }
            }
            a {
                width: 100%;
                .video-poster--image {
                    transition: all .5s ease;
                }
            }
        }
        .video__desc {
            margin-top: 13px;
            color: white;
            font-family: 'Circular Std';
            position: relative;
            &--name {
                font-size: 16px;
                line-height: 18px;
            }
            &__status {
                margin-top: 13px;
                margin-bottom: 13px;
                display: flex;
                flex-direction: row;
                font-weight: lighter;
                font-size: 14px;
                &--counter {
                    font-family: 'Lato';
                    font-size: 12px;
                    font-weight: 300;
                    letter-spacing: 1px;
                }
                &--length {
                    margin-left: 30px;
                    font-family: 'Lato';
                    font-size: 12px;
                    font-weight: 300;
                    letter-spacing: 1px;
                }
                &--edit {
                    opacity: 0;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    &:hover {
                        cursor: pointer;
                    }
                    img {
                        width: 20px;
                    }
                }
            }
        }
        .hover-icon {
            transition: all .3s ease-in;
        }
        &:hover {
            //cursor: pointer;
            .hover-icon {
                opacity: 1;
                transform: scale(1.1);
            }
            .video-poster--image {
                transform: scale(1.01);
            }
        }
    }
</style>