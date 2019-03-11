<template>
	<header>
	  <div class="container">
	    <img alt="Vue logo" src="../assets/logo.png">
	    <h1>
	      TimeCollector
	      <span class="small">by Lorenz Hohmann</span>
	    </h1>
	  </div>
	  <div class="sub-header">
	      <h2>{{welcomeText}}</h2>
	    </div>
	</header>
</template>
<script>

import TimeService from '../services/timeService.js';

export default {
	name: 'Header',
	props: ["userID"],
	data() {
		return {
			welcomeText: ''
		}
	},
	created() {
	    TimeService.getUsername(this.userID).then((username) => {
	      this.welcomeText = 'Hallo, ' + username + '!';
	    }).catch(() => {
	      this.welcomeText = '404 - Ungültiger Benutzer';
	    });
	}	
}
</script>