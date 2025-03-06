import { NextFunction, Request, Response } from 'express';
import Controller from './Controller';
import Categoria from '../models/Categoria';

class CategoriaController extends Controller<Categoria> {
  constructor() {
    super(Categoria);
  }
}

export default new CategoriaController();