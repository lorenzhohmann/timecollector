<template>
	<header>
		<div class="container">
			<img alt="Vue logo" src="../assets/logo.png">
			<h1>
				TimeCollector
			<span class="small">by Lorenz Hohmann</span>
		</h1>
		</div>
		<div class="sub-header" v-if="currentRoute !== 'LoginComponent'">
			<h2>{{welcomeText}}</h2>
		</div>
	</header>
</template>
<script>

export default {
	name: 'Header',
	props: ["userID", "currentRoute"],
	data() {
		return {
			welcomeText: ''
		}
	},
	mounted() {
		if(this.$store.state.isUserLoggedIn) {
			this.welcomeText = 'Hallo, ' + this.$store.state.user.name + '!';
		} else {
			this.welcomeText = '404';
		}
	}	
}
</script>