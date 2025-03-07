// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NextFunction, Request, Response } from 'express';
import Categoria from '../models/Categoria';
import Controller from './Controller';


class CategoriaController extends Controller<Categoria> {
  constructor() {
    super(Categoria);
  }
}

export default new CategoriaController();
