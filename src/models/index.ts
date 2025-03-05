import { Sequelize } from 'sequelize';
import params from '../configs/connParams';

const sequelize = new Sequelize(params);

export default sequelize;
