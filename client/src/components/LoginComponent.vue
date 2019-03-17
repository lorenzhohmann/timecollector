<template>
	<div class="container mt-5 jumbotron">
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Name" v-model="name">
		</div>
		<div class="form-group">
			<input type="password" class="form-control" placeholder="Passwort" v-model="password">
		</div>
		<button class="btn btn-primary" v-on:click="login()">Anmelden</button>
		<div class="alert alert-danger mt-3" v-if="error">{{error}}</div>
	</div>
</template>

<script>
import TimeService from '@/services/timeService.js';

export default {
	name: 'LoginComponent',
	data() {
		return {
			name: '',
			password: '',
			error: ''
		}
	},
	mounted() {
		if(this.$store.state.isUserLoggedIn) {
				this.$router.push('dashboard');
			}
	},
	methods: {
		async login() {
			try {
				const response  = await TimeService.login({
					name: this.name,
					password: this.password
				});
				this.$store.dispatch('setToken', response.token);
				this.$store.dispatch('setUser', response.user);
				this.$router.push('dashboard');
			} catch(err) {
				this.error = err.response.data.error;
			}
		}
	}
}
</script>