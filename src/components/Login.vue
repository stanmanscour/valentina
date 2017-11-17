<template>
	<div class="val__login">
		<div class="val__intro">
			<h1 class="val__intro--title">valentina.io</h1>
			<p class="val__intro--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis neque leo, id vulputate felis fringilla eu. Morbi dolor neque.</p>
		</div>
		<form class="val__login__form">
			<div class="val__login__form__inputs">
				<input v-model="email" type="text" name="email" placeholder="Adresse email">
				<input v-model="password" type="password" name="password" placeholder="Mot de passe">
			</div>
			<div class="val__login__form__actions">
				<router-link class="val__login__form__actions--else" to="/signup">Pas encore inscrit ? Inscription</router-link>
				<a @click.prevent="submitLogin" href="#" class="val__login__form__actions--go">Connexion</a>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			submitLogin(){
				const formData = {
					email: this.email,
					password: this.password
				}
				//console.log(formData);
				this.$store.dispatch('login', {email: formData.email, password: formData.password})
			}
		}
	}
</script>

<style lang="scss">
	
</style>