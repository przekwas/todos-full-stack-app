import * as mysql from 'mysql';

const pool = mysql.createPool({
	host: 'localhost',
	user: 'todos_app',
	password: 'todos_app',
	database: 'todos_app'
});

export const Query = (query: string, values?: any) => {
	return new Promise((resolve, reject) => {
		pool.query(query, values, (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

import users from './queries/users';
import todos from './queries/todos';
export default {
    users,
	todos
}