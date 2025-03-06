import { Sequelize } from 'sequelize';
import params from '../config/connParams';

const sequelize = new Sequelize(params);

export default sequelize;
