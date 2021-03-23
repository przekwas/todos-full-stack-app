import { Query } from '../';

const insert = (email: string, first_name: string, last_name: string, password: string) =>
	Query(`INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)`, [
		email,
		first_name,
		last_name,
		password
	]);

export default {
	insert
};
