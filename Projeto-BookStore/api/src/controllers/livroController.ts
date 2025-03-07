import { NextFunction, Request, Response } from 'express';
import AutorModel from '../models/Autor';
import CategoriaModel from '../models/Categoria';
import Controller from './Controller';
import Livro from '../models/Livro';
import NotFoundError from '../errors/NotFoundError';

class LivroController extends Controller<Livro> {
  constructor() {
    super(Livro);
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const livros = await Livro.findAll({
        include: [
          {
            model: CategoriaModel,
            as: 'categoria',
            attributes: ['nome'],
          },
          {
            model: AutorModel,
            as: 'autores',
            attributes: ['nome'],
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).json(livros);
    } catch (error) {
      next(error);
    }
  }

  async listarLivrosPorEditora(
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) {
    try {
      const { editora } = req.query;

      if (typeof editora !== 'string') {
        throw new Error('Parâmetro "editora" inválido');
      }

      const livros = await Livro.findAll({
        where: { editora },
        include: [
          { association: 'autores', attributes: ['nome'] }, 
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
