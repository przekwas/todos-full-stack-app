import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/:todoid', async (req, res) => {
    const todoid = Number(req.params.todoid);
	try {
		const todoDetails = await db.todos.one(todoid);
		res.json(todoDetails[0]);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const allTodos = await db.todos.all();
		res.json(allTodos);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

router.post('/', async (req, res) => {
    const newTodo = req.body;
	try {
		const result = await db.todos.insert(newTodo);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

router.put('/:todoid', async (req, res) => {
    const todoid = Number(req.params.todoid);
    const editedTodo = req.body;
	try {
		const result = await db.todos.update(editedTodo, todoid);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

router.delete('/:todoid', async (req, res) => {
    const todoid = Number(req.params.todoid);
	try {
		const result = await db.todos.destroy(todoid);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

export default router;
