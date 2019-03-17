import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	strcit: true,
	plugins: [
		createPersistedState()
	],
	state: {
		token: null,
		user: null,
		isUserLoggedIn: false,
		welcomeText: '404 - Benutzer nicht angemeldet'
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			if(token) {
				state.isUserLoggedIn = true;
				state.welcomeText = 'Hallo, ' + state['user'] + '!';
			} else {
				state.isUserLoggedIn = false;
			}
		},
		setUser(state, user) {
			state.user = user;
		}
	},
	actions: {
		setToken({commit}, token) {
			commit('setToken', token);
		},
		setUser({commit}, user) {
			commit('setUser', user);
		}		
	}

});