import { Router, Request, Response } from 'express';

import BuscarCepService from '../services/BuscarCepService';

const cepRouter = Router();

cepRouter.get('/:cep', async (request: Request, response: Response) => {
  const { cep } = request.params;

  const buscarCepService = new BuscarCepService();

  const buscarCep = await buscarCepService.execute({
    cep,
  });

  return response.json(buscarCep);
});

export default cepRouter;
