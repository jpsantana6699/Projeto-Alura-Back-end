import { NextFunction, Request, Response } from 'express';
import BadRequestError from '../errors/BadRequestError';
import UserModel from '../models/UserModel'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new BadRequestError('Email and password are required');
      }

      const user = await UserModel.findOne({
        where: { email: email },
      });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new BadRequestError('Invalid email or password');
      }

      if (!user.isActive) {
        throw new BadRequestError('User is not active');
      }

      const token = jwt.sign(
        {
          id: user.id, 
          email: user.email, 
        },
        process.env.JWT_SECRET as string,
        { expiresIn: 86400 }, 
      );

      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;