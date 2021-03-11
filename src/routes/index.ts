import { Router } from 'express';

import cepRouter from '../modules/Cep/routes/cep.routes';

const routes = Router();

routes.use('/cep', cepRouter);

export default routes;
