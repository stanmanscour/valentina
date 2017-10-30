<template>
  <div class="addonHeader__add">
    
    <template v-if="step1">
      <div class="addonHeader__add__step1">
        <input type="text" placeholder="Url de la musique">
        <div class="addonHeader__add__step1__action">
          <a href="#">Suivant</a>
        </div>
      </div>
    </template>
    
    <template v-if="step2">
      <div class="addonHeader__add__step2">
        <input type="text" placeholder="Artiste">
        <input type="text" placeholder="Titre">
        <input type="text" placeholder="Genre">
        <div class="addonHeader__add__step2__action">
          <a href="#">Retour</a>
          <a href="#">Suivant</a>
        </div>
      </div>
    </template>

    <template v-if="step3">
      <div class="addonHeader__add__step3">
        <div class="addonHeader__add__step3__image"></div>
        <div class="addonHeader__add__step3__action">
          <a href="#">Retour</a>
          <a href="#">Suivant</a>
        </div>
      </div>
    </template>
    
  </div>
</template>

<script> 
  export default {
    data(){
      return {
        step1: true,
        step2: false,
        step3: false
      }
    }
  }
</script>

<style lang="scss">
  
</style>