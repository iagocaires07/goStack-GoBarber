import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import ProfileController from '../controllers/ProfileController';

const profileRoute = Router();
const profileController = new ProfileController();

profileRoute.use(ensureAuthenticated);

profileRoute.get('/', profileController.show);
profileRoute.put('/', profileController.update);

export default profileRoute;
