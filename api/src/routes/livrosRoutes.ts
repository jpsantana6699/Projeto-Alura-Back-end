import { NextFunction, Request, Response, Router } from 'express';
import livroController from '../controllers/livroController';

const router = Router();

router
  .post('/', (req: Request, res: Response, next: NextFunction) =>
    livroController.create(req, res, next),
  )
  .get('/', (req: Request, res: Response, next: NextFunction) =>
    livroController.getAll(req, res, next),
  )
  .get('/busca', (req: Request, res: Response, next: NextFunction) =>
    livroController.listarLivrosPorEditora(req, res, next),
  )
  .get('/:id', (req: Request, res: Response, next: NextFunction) =>
    livroController.getById(req, res, next),
  )
  .put('/:id', (req: Request, res: Response, next: NextFunction) =>
    livroController.updateById(req, res, next),
  )
  .delete('/:id', (req: Request, res: Response, next: NextFunction) =>
    livroController.deleteById(req, res, next),
  );

export default router;
