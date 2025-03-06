import { Sequelize } from 'sequelize';
import params from '../config/connParams';

export default new Sequelize(params);
