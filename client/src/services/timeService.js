import axios from 'axios';
import moment from 'moment';

const url = 'api/';

export default class TimeService {

	static getUsername(userID) {
		return new Promise(async (resolve, reject) => {

			if(!userID) {
				reject('no user requested');
			}

			try {
				const result = await axios.get(url + 'user/' + userID);
				resolve(result.data);
			} catch(err) {
				reject(err);
			}
		});
	}

	static login(username, password) {
		return new Promise(async (resolve, reject) => {

			try {
				const result = axios.post(url + 'user/');
				resolve(result.data._id);
			} catch(err) {
				reject(err);
			}
		});
	}

	static getTimes(userID, dateFrom, dateTo) {
		return new Promise(async (resolve, reject) => {

			try {
				let fullURL = url + 'time/' + userID;

				if(dateFrom && dateTo) {
					const fromYear = moment(dateFrom).format('YYYY');
					const fromMonth = moment(dateFrom).format('MM');
					const fromDay = moment(dateFrom).format('DD');

					const toYear = moment(dateTo).format('YYYY');
					const toMonth = moment(dateTo).format('MM');
					const toDay = moment(dateTo).format('DD');

					fullURL += `/${fromYear}/${fromMonth}/${fromDay}/${toYear}/${toMonth}/${toDay}`;
				}

				const result = await axios.get(fullURL);
				resolve(result.data);
			} catch(err) {
				reject(err);
			}
		});
	}

	static deleteTime(userID, id) {
		return new Promise(async (resolve, reject) => {

			try {
				await axios.delete(url + 'time/' + userID + '/' + id);
				resolve();
			} catch(err) {
				reject(err);
			}
		});
	}

	static saveInsert(userID, date, from, to, breakFrom, breakTo) {
		return new Promise(async (resolve, reject) => {

			from = `${date} ${from}`;
			to = `${date} ${to}`;
			breakFrom = `${date} ${breakFrom}`;
			breakTo = `${date} ${breakTo}`;

			try {
				await axios.post(url + 'time/' + userID, {date, from, to, break_from: breakFrom, break_to: breakTo});
				resolve();
			} catch(err) {
				reject(err);
			}
		});
	}
}