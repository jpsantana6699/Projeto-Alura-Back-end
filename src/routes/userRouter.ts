import { Router } from 'express';
import permissionMiddleware from '../middlewares/permissionMiddleware';
import userController from '../controllers/UserController';

const userRouter = Router();

const exclude = ['password', 'createdAt', 'updatedAt', 'deletedAt'];

userRouter
  .post('/', permissionMiddleware(1, 1), (req, res, next) =>
    userController.create(req, res, next))
  .get('/', permissionMiddleware(2, 0), (req, res, next) =>
    userController.getAll(req, res, next, [], exclude))
  .get('/:id', permissionMiddleware(2, 1), (req, res, next) =>
    userController.getById(req, res, next, [], exclude))
  .put('/:id', permissionMiddleware(3, 1), (req, res, next) =>
    userController.updateById(req, res, next))
  .delete('/:id', permissionMiddleware(4, 1), (req, res, next) =>
    userController.deleteById(req, res, next));

export default userRouter;
