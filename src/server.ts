import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';

import connectMongo from './connection';
import MyError from './errors';
import routes from './routes';

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use(routes);

dotenv.config();

connectMongo(process.env.DATABASE_URL);

// Tratar Erros
server.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof MyError) {
      return response.status(error.statusCodeError).json({
        Error: 'Aconteceu um erro na aplicação 💔',
        Status: error.statusCodeError,
        Descrição: error.errorMessage,
      });
    }

    return response.status(500).json({
      Error: 'Aconteceu um erro no servidor da aplicação 🤕',
      Status: 'internal server error',
      Descrição: error.message,
    });
  },
);

const port = process.env.PORT || 3331;

server.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port} ☁`);
});
