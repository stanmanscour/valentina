<template>
	<div class="val__signup">
		<div class="val__intro">
			<h1 class="val__intro--title">valentina.io</h1>
			<p class="val__intro--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis neque leo, id vulputate felis fringilla eu. Morbi dolor neque.</p>
		</div>
		<form class="val__signup__form">
			<div class="val__signup__form__inputs">
				<input type="text" name="email" placeholder="Adresse email">
				<input type="password" name="password" placeholder="Mot de passe">
				<input type="password" name="password" placeholder="Répéter le mot de passe">
			</div>
			<div class="val__signup__form__actions">
				<router-link class="val__signup__form__actions--else" to="/login">Déjà inscrit ? Connexion</router-link>
				<router-link class="val__signup__form__actions--go" to="/">Inscription</router-link>
			</div>
		</form>
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	@import './../assets/scss/mixins.scss';

	.val__login,
	.val__signup {
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;

		&__form {
			max-width: 300px;
			margin-left: auto;
			margin-right: auto;
			margin-top: 54px;
			&__inputs {
				display: flex;
				flex-direction: column;

				input {
					height: 43px;
					margin-top: 6px;
					margin-bottom: 6px;
					box-sizing: border-box;
					padding-left: 15px;
					font-size: 13px;
					outline: none;
					border: none;
				}
			}
			&__actions {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-top: 15px;

				&--else {
					text-decoration: none;
					font-size: 12px;
					color: white;
					@extend .val-subFont;

					&:hover {
						text-decoration: underline;
					}
				}
				&--go {
					font-size: 16px;
					color: white;
					@extend .val-subFont;
					text-decoration: none;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>