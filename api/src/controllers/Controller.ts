import { CreationAttributes, Includeable, Model, ModelStatic } from 'sequelize';
import { NextFunction, Request, Response } from 'express';
import NotFoundError from '../errors/NotFoundError';
import Services from '../services/service';

class Controller<T extends Model> {
  private service: Services<T>;

  constructor(Model: ModelStatic<T>) {
    this.service = new Services(Model);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const createData: CreationAttributes<T> = req.body;
      const createdItem = await this.service.create(createData);

      res.status(201).send(createdItem);
    } catch (error) {
      next(error);
    }
  }

  async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
    include?: Includeable[],
    exclude?: string[],
  ) {
    try {
      const {
        page = '1',
        pageSize = '1000',
      } = req.query;
      const pageNumber = parseInt(page as string);
      const pageSizeNumber = parseInt(pageSize as string);
      const registers = await this.service
        .getAll(pageNumber, pageSizeNumber, include, exclude);

      if (!registers.length) throw new NotFoundError('Register not found');

      res.status(200).send(registers);
    } catch (error) {
      next(error);
    }
  }

  async getById(
    req: Request,
    res: Response,
    next: NextFunction,
    include?: Includeable[],
    exclude?: string[],
  ) {
    try {
      const id = Number(req.params.id);
      const register = await this.service.getById(id, include, exclude);
      if (!register) throw new NotFoundError('Register not found');
      res.status(200).send(register);
    } catch (error) {
      next(error);
    }
  }

  async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const data: CreationAttributes<T> = req.body;

      const result = await this.service.updateById(id, data);

      if (!result) {console.error('Result not found');}
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const result = await this.service.deleteById(id);
      if (!result) throw new NotFoundError('Register not found');
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default Controller;
