<template>
  <div id="app" class="val">
    
    <router-view></router-view>
    
  </div>
</template>



<style lang="scss">
  @import './assets/scss/reset.scss';

  body {
    &::-webkit-scrollbar {
          height: 12px;
          width: 2px;
          background: #016752;
        }

        &::-webkit-scrollbar-thumb {
            background: #025645;
            -webkit-border-radius: 1ex;
            -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
        }

        &::-webkit-scrollbar-corner {
            background: #000;
        }
  }
</style>
