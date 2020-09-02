import { Router } from 'express';

import usersRoute from './users.route';
import appointmentsRouter from './appointments.router';
import sessionsRouter from './sessions.route';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRoute);
routes.use('/sessions', sessionsRouter);

export default routes;
