import axios from 'axios';

const url = 'api/';


export default {

	async login(credentials) {
		return new Promise(async (resolve, reject) => {

			try {
				const result = await axios.post(url + 'user/login', credentials);
				resolve(result.data);
			} catch(err) {
				reject(err);
			}
		});
	},

	async getTimes(userID, dateFrom, dateTo) {
		return new Promise(async (resolve, reject) => {

			try {
				let fullURL = `${url}time/${userID}/${dateFrom}/${dateTo}`;

				const result = await axios.get(fullURL);
				resolve(result.data.times);
			} catch(err) {
				reject(err);
			}
		});
	},

	deleteTime(userID, id) {
		return new Promise(async (resolve, reject) => {

			try {
				await axios.delete(url + 'time/' + userID + '/' + id);
				resolve();
			} catch(err) {
				reject(err);
			}
		});
	},

	saveInsert(userID, date, from, to, breakFrom, breakTo) {
		return new Promise(async (resolve, reject) => {

			try {
				await axios.post(url + 'time/' + userID, {date, from, to, break_from: breakFrom, break_to: breakTo});
				resolve();
			} catch(err) {
				reject(err);
			}
		});
	},
}