<template>
	<div class="container mt-5 jumbotron">
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Name" v-model="username">
		</div>
		<div class="form-group">
			<input type="password" class="form-control" placeholder="Passwort" v-model="password">
		</div>
		<button class="btn btn-primary" v-on:click="login()">Anmelden</button>
		<div class="alert alert-danger" v-if="error">{{error}}</div>
	</div>
</template>

<script>
import TimeService from '../services/timeService.js';

export default {
	name: 'LoginComponent',
	data() {
		return {
			username: '',
			password: '',
			error: ''
		}
	},
	methods: {
		async login() {
			this.userID = await TimeService.login(this.username, this.password);
			this.error = 'Login failed';
		}
	}
}
</script>