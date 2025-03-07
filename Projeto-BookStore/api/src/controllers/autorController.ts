// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NextFunction, Request, Response } from 'express';
import Autor from '../models/Autor';
import Controller from './Controller';


class AutorController extends Controller<Autor> {
  constructor() {
    super(Autor);
  }
}

export default new AutorController();
