import * as express from 'express';

const router = express.Router();

router.get('/:todoid', async (req, res) => {
    const todoid = Number(req.params.todoid);
	try {
		res.json({ msg: 'single todo by id ' + todoid });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

router.get('/', async (req, res) => {
	try {
		res.json({ msg: 'all todos' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

router.post('/', async (req, res) => {
    const newTodo = req.body;
	try {
		res.json({ msg: 'added new todo', ...newTodo });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

router.put('/:todoid', async (req, res) => {
    const todoid = Number(req.params.todoid);
    const editedTodo = req.body;
	try {
		res.json({ msg: 'single todo by id ' + todoid, ...editedTodo });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

router.delete('/:todoid', async (req, res) => {
    const todoid = Number(req.params.todoid);
	try {
		res.json({ msg: 'destroyed todo by id ' + todoid });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

export default router;
