import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '.';

class SystemRouteModel extends Model<
  InferAttributes<SystemRouteModel>,
  InferCreationAttributes<SystemRouteModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

SystemRouteModel.init({
  id: {
    field: 'syr_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    field: 'syr_des_name',
    allowNull: false,
    type: DataTypes.STRING(80),
    unique: {
      name: 'UK1_tb_systems_routes',
      msg: 'This name already exists in this system',
    },
    validate: {
      notNull: {
        msg: 'Name is required',
      },
      len: {
        args: [3, 80],
        msg: 'Name must be between 3 and 80 characters',
      },
    },
  },
  description:{
    field: 'syr_des_description',
    allowNull: true,
    type: DataTypes.STRING(320),
    defaultValue: '',
  },
  createdAt: {
    field: 'syr_dat_created_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'syr_dat_updated_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'syr_dat_deleted_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'SystemRouteModel',
  tableName: 'tb_systems_routes',
  timestamps: true,
  paranoid: true,
});

export default SystemRouteModel;
