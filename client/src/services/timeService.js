import axios from 'axios';
import moment from 'moment';

const url = 'http://localhost:3000/api/';

export default class TimeService {

	static getUsername(userID) {
		return new Promise(async (resolve, reject) => {

			try {
				const result = await axios.get(url + 'user/' + userID);
				resolve(result.data);
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
}