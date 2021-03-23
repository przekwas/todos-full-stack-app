import { Query } from '../';

const all = () => Query('SELECT * FROM todos');
const one = (id: number) => Query('SELECT * FROM todos WHERE id = ?', [id]);
const destroy = (id: number) => Query('DELETE FROM todos WHERE id = ?', [id]);
const insert = (newTodo: { userid: number; content: string }) =>
	Query('INSERT INTO todos SET ?', newTodo);
const update = (updatedTodo: { userid?: number; content?: string }, id: number) =>
	Query('UPDATE todos SET ? WHERE id = ?', [updatedTodo, id]);

export default {
	all,
	one,
	destroy,
	insert,
	update
};
