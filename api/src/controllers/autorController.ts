import { NextFunction, Request, Response } from 'express';
import Controller from './Controller';
import Autor from '../models/Autor';

class AutorController extends Controller<Autor> {
  constructor() {
    super(Autor);
  }
}

export default new AutorController();