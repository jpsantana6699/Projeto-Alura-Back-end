import { NextFunction, Request, Response } from 'express';
import Autor from '../models/Autor';
import Categoria from '../models/Categoria';
import Controller from './Controller';
import Livro from '../models/Livro';
import NotFoundError from '../errors/NotFoundError';

class LivroController extends Controller<Livro> {
  constructor() {
    super(Livro);
  }

  async listarLivrosPorEditora(
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) {
    try {
      const { editora } = req.query;

      if (typeof editora !== 'string') {
        throw new Error('Invalid editora parameter');
      }

      const livros = await Livro.findAll({
        where: { editora },
        include: [
          { association: 'autor', attributes: ['nome'] },
          { association: 'categoria', attributes: ['nome', 'descricao'] },
        ],
      });

      if (!livros.length) throw new NotFoundError('Livros não encontrados');
      
      res.status(200).send(livros);
    } catch (error) {
      next(error);
    }
  }
}

export default new LivroController();
