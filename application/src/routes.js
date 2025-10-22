import { Router } from 'express';

import authMiddleware from './app/middlewares/auth.js';

import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import TaskController from './app/controllers/TaskController.js';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.put('/tasks/:task_id', TaskController.update);
routes.delete('/tasks/:task_id', TaskController.delete);

export default routes;