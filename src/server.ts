import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import cors from 'cors';

import connectMongo from './connection';
import MyError from './errors';
import routes from './routes';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use(routes);

console.log(process.env.URL_MONGO);

connectMongo(process.env.URL_MONGO);

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

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port} ☁`);
});
