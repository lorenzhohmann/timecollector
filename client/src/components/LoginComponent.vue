<template>
	<div class="container mt-5 jumbotron">
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Name" v-model="name">
		</div>
		<div class="form-group">
			<input type="password" class="form-control" placeholder="Passwort" v-model="password">
		</div>
		<button class="btn btn-primary" v-on:click="login()">Anmelden</button>
	</div>
</template>

<script>
export default {
	name: 'LoginComponent',
	data() {
		return {
			name: '',
			password: ''
		}
	},
	methods: {
		login() {
			
		}
	}
}
</script>