import { NextFunction, Request, Response } from 'express';
import BadRequestError from '../errors/BadRequestError';
import jwt from 'jsonwebtoken';

const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization;

    if (!token) throw new BadRequestError('Access token is required', 401);

    const [, accessToken] = token.split(' ');

    const decoded = jwt.verify(
      accessToken,
      process.env.JWT_SECRET as string,
    );

    res.locals.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};

export default authenticationMiddleware;
