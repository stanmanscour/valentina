<template>
  <transition name="goUp">
	  <div v-if="errorVisible" class="val__info">
	    <p class="val__info--errorMsg">{{ errorMsg }}</p>
	    <!-- <a class="val__info--close" href="#" @click.prevent="closeError">
	      <img src="src/assets/icons/closeWhite.svg">
	    </a> -->
	  </div>
  </transition>
</template>

<script>
	import { mapGetters } from 'vuex';

  export default { 
		computed: {
			...mapGetters({
				errorMsg: 'getErrorMsg',
				errorVisible: 'getErrorVisible'
			})
		}
  }
</script>

<style lang="scss">
	@import './../assets/scss/mixins.scss';

	.val__info {
			z-index: 1000;
			position: fixed;
			bottom: 0px;
			left: 0px;
			right: 0px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			background-color: #FD5B5B;
			padding-left: 30px;
			padding-right: 30px;
			&--errorMsg {
				@extend .val-font;
				text-align: center;
				color: white;
				font-size: 13px;
				line-height: 18px;
				padding-top: 15px;
				padding-bottom: 15px;
			}
			&--close {
				margin-left: 10px;
				width: 18px;
				height: 13px;
				&:hover {
					opacity: 0.7;
				}
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
</style>