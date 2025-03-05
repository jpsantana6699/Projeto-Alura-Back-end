import express from 'express';
import authRoutes from './authRoutes';

const routes = (app: express.Application) => {
  app.route('/').get((req, res) => {
    res.status(200).send('API Express');
  });

  app.use('/auth', authRoutes);
};

export default routes;