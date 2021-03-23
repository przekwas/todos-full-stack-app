import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.post('/register', async (req, res) => {
	const newUser = req.body;
	try {
		const result = await db.users.insert(
			newUser.email,
			newUser.first_name,
			newUser.last_name,
			newUser.password
		);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sucks, let me know lol!', error: error.message });
	}
});

export default router;


/*

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 1,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}

*/