import { NextFunction, Request, Response, Router } from 'express';
import categoriaController from '../controllers/categoriaController';

const router = Router();

router
  .post('/', (req: Request, res: Response, next: NextFunction) =>
    categoriaController.create(req, res, next),
  )
  .get('/', (req: Request, res: Response, next: NextFunction) =>
    categoriaController.getAll(req, res, next),
  )
  .get('/:id', (req: Request, res: Response, next: NextFunction) =>
    categoriaController.getById(req, res, next),
  )
  .put('/:id', (req: Request, res: Response, next: NextFunction) =>
    categoriaController.updateById(req, res, next),
  )
  .delete('/:id', (req: Request, res: Response, next: NextFunction) =>
    categoriaController.deleteById(req, res, next),
  );

export default router;
