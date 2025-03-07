import { NextFunction, Request, Response, Router } from 'express';
import autorController from '../controllers/autorController';

const router = Router();

router
  .post('/', (req: Request, res: Response, next: NextFunction) =>
    autorController.create(req, res, next),
  )
  .get('/', (req: Request, res: Response, next: NextFunction) =>
    autorController.getAll(req, res, next),
  )
  .get('/:id', (req: Request, res: Response, next: NextFunction) =>
    autorController.getById(req, res, next),
  )
  .put('/:id', (req: Request, res: Response, next: NextFunction) =>
    autorController.updateById(req, res, next),
  )
  .delete('/:id', (req: Request, res: Response, next: NextFunction) =>
    autorController.deleteById(req, res, next),
  );

export default router;
