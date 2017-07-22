<template>
    <div class="formAdd">
        <p class="formAdd--previousLink">{{ addLink }}</p>
        <p class="formAdd--title">Ajouter des infos</p>
        <form class="formAdd__form">
            <div class="formAdd__form__sections">
                <div class="formAdd__form__sections__firstSection">
                    <div class="val-form-group">
                        <!--<label class="val-form-group-label">Artiste</label>-->
                        <input class="val-form-group-input" placeholder="Artiste" type="text" v-model="name">
                    </div>
                    <div class="val-form-group">
                        <!--<label class="val-form-group-label">Titre</label>-->
                        <input class="val-form-group-input" type="text" placeholder="Titre" v-model="title">
                    </div>
                    <div class="val-form-group">
                        <!--<label class="val-form-group-label">Genre</label>-->
                        <input class="val-form-group-input" type="text" placeholder="Genre" v-model="genre">
                    </div>
                </div>
                <div class="formAdd__form__sections__secondSection">
                    <div class="val-form-group">
                        <input class="val-form-group-input" type="text" placeholder="Poster" v-model="poster">
                    </div>
                </div>
            </div>
            <div class="formAdd__form__action">
                <a class="formAdd__form__action--exit" href="#"><img src="#">Annuler</a>
                <a class="formAdd__form__action--add" href="#">Ajouter<img src="#"></a>
            </div>
        </form>
    </div>
</template>

<script>
    import { EventBus } from './../main';

    export default {
        data: function() {
            return {
                addLink: 'https://www.youtube.com/watch?v=atAOWRzkHRs',
                name: '',
                title: '',
                genre: '',
                poster: ''
            }
        },
        methods: {
            createObj(obj){

            }
        },
        created(){
            EventBus.$on('createAddForm', obj => {
                console.log(obj);
            })
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/mixins.scss';
    .formAdd {
        position: fixed;
        width: 100%;
        top: 0px;
        background-color: $val-background;
        padding-top: 80px;
        padding-right: 20px;
        padding-left: 20px;
        box-sizing: border-box;
        z-index: 19;
        &:after {
            content: '';
            height: 100%;
            display: inline-block;
            position: absolute;
            bottom: -100%;
            left: 0px;
            right: 0px;
            background-color: rgba(0, 0, 0, 0.66);
        }
        @media screen and (min-width: em(738)) {
            padding-right: 50px;
            padding-left: 50px;
        }
        @media screen and (min-width: em(1024)) {
            padding-right: 160px;
            padding-left: 160px;
        }
        &--previousLink {
            @extend .val-font;
            font-size: 12px;
            opacity: 0.4;
            color: white;
            margin-bottom: 10px;
            line-height: 18px;
        }
        &--title {
            @extend .val-font;
            font-size: 15px;
            color: white;
            font-weight: 200;
            margin-bottom: 10px;
        }
        &__form {
            &__sections {
                display: flex;
                flex-direction: column;
                @media screen and (min-width: em(738)) {
                    flex-direction: row;
                }
                &__firstSection {
                    flex-grow: 1;
                }
                &__secondSection {
                    flex-grow: 1;
                }
            }
            &__action {
                height: 80px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                &--exit,
                &--add {
                    color: white;
                    text-decoration: none;
                    @extend .val-font;
                    font-size: 16px;
                    // margin-left: 25px;
                    // margin-right: 25px;
                }
                &--exit {
                    img {
                        margin-right: 10px;
                    }
                }
                &--add {
                    img {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>

