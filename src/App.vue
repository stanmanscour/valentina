<template>
  <div id="app" class="val">
    
    <router-view></router-view>
    <val-menu-mobile></val-menu-mobile>
    <val-msg-error></val-msg-error>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  import MenuMobile from './components/MenuMobile.vue';
  import MsgError from './components/MsgError.vue';

  export default {
    methods: {
      ...mapActions({
        showError: 'showError'
      }),
    },
    components: {
      valMenuMobile: MenuMobile,
      valMsgError: MsgError
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/reset.scss';
</style>
