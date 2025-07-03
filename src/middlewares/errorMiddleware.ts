import { Request, Response } from 'express';
import BadRequestError from '../errors/BadRequestError';
import BaseError from '../errors/BaseError';
import ValidationError from '../errors/ValidationError';
import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';

const errorsMiddleware = (
  error: Error,
  req: Request,
  res: Response,
) => {
  if (error instanceof jwt.JsonWebTokenError) {
    new BadRequestError('Invalid token', 401).sendResponse(res);
  } else if (error instanceof sequelize.ValidationError) {
    new ValidationError(error).sendResponse(res);
  } else if (error instanceof BaseError) {
    (error as BaseError).sendResponse(res);
  } else {
    console.error(error);
    new BaseError().sendResponse(res);
  }
};

export default errorsMiddleware;
