import express, { Express } from 'express';
import authRouter from './authRouter';
import authenticationMiddleware from '../middlewares/authMiddleware';
import errorsMiddleware from '../middlewares/errorMiddleware';
import notFoundMiddleware from '../middlewares/notFoundMiddleware';
import userRouter from './userRouter';

const routes = (app: Express) => {
  app.use(express.json());

  app.use('/api/v1/auth/login', authRouter);

  app.use(authenticationMiddleware);

  app.use('/api/v1/users', userRouter);

  app.use(notFoundMiddleware);

  app.use(errorsMiddleware);
};

export default routes;
