import * as express from 'express';
import todosRouter from './todos';
import usersRouter from './users';

const router = express.Router();

router.use('/todos', todosRouter);
router.use('/users', usersRouter);

export default router;