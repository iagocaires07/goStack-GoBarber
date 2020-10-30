import { Router } from 'express';

import usersRoute from '@modules/users/infra/http/routes/users.route';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.router';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.route';
import passwordRouter from '@modules/users/infra/http/routes/password.route';
import profileRouter from '@modules/users/infra/http/routes/profile.route';
import providersRouter from '@modules/appointments/infra/http/routes/providers.route';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/providers', providersRouter);
routes.use('/users', usersRoute);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
