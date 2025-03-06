import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from 'sequelize';
import PermissionTypeModel from './PermissionTypeModel';
import SystemRouteModel from './SystemRouteModel';
import sequelize from '.';

class PermissionModel extends Model<
  InferAttributes<PermissionModel>,
  InferCreationAttributes<PermissionModel>
> {
  declare id: CreationOptional<number>;
  declare typeId: ForeignKey<PermissionTypeModel['id']>;
  declare type: NonAttribute<PermissionTypeModel>;
  declare routeId: ForeignKey<SystemRouteModel['id']>;
  declare route: NonAttribute<SystemRouteModel>;
  declare description: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

PermissionModel.init({
  id: {
    field: 'per_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  typeId: {
    field: 'pet_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PermissionTypeModel,
      key: 'pet_id',
    },
  },
  routeId: {
    field: 'syr_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SystemRouteModel,
      key: 'syr_id',
    },
  },
  description: {
    field: 'per_des_description',
    allowNull: true,
    type: DataTypes.STRING(500),
  },
  createdAt: {
    field: 'per_dat_created_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'per_dat_updated_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'per_dat_deleted_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'PermissionModel',
  tableName: 'tb_permissions',
  timestamps: true,
  paranoid: true,
});

export default PermissionModel;
