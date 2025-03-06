import { NextFunction, Request, Response } from 'express';
import NotFoundError from '../errors/NotFoundError';

const permissionMiddleware = (
  permissionType: number,
  permissionRoute: number,
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const { permissions } = res.locals.user;

      for (const permission of permissions) {
        if (
          permission.route === permissionRoute &&
          permission.type === permissionType
        ) {
          return next();
        }
      }

      throw new NotFoundError();
    } catch (error) {
      next(error);
    }
  };
};

export default permissionMiddleware;
