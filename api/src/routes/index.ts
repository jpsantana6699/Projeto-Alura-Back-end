import express, { Express } from 'express';
import autorRoutes from './autorRoutes';
import categoriaRoutes from './categoriaRoutes';
import errorsMiddleware from '../middlewares/errorMiddleware';
import livroRoutes from './livrosRoutes';
import notFoundMiddleware from '../middlewares/notFoundMiddleware';

const routes = (app: Express) => {
  app.use(express.json());

  app.use('/api/v1/autores', autorRoutes);
  app.use('/api/v1/categorias', categoriaRoutes);
  app.use('/api/v1/livros', livroRoutes);

  app.use(notFoundMiddleware);

  app.use(errorsMiddleware);
};

export default routes;
