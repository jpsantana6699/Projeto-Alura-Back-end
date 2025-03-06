import AuthController from '../controllers/AuthController';
import Router from 'express';

const authController = Router();

authController.post('/', AuthController.login);

export default authController;
