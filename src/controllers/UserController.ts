import { NextFunction, Request, Response } from 'express';
import BadRequestError from '../errors/BadRequestError';
import Controller from './Controller';
import UserModel from '../models/UserModel';
import bcrypt from 'bcryptjs';

class UserController extends Controller<UserModel> {
  constructor() {
    super(UserModel);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const password = req.body.password;

      if (!password)
        throw new BadRequestError('Password is required');

      const passwordHash = await bcrypt.hash(password, 12);

      req.body.password = passwordHash;

      super.create(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async updateById(req: Request, res: Response, next: NextFunction) {
    const password = req.body.password;
    const passwordHash = await bcrypt.hash(password, 12);

    req.body.password = passwordHash;

    super.updateById(req, res, next);
  }
}

export default new UserController();
