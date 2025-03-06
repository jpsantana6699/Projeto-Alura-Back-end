import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import PermissionModel from './PermissionModel';
import RoleModel from './RoleModel';
import sequelize from '.';

class RolePermissionModel extends Model<
  InferAttributes<RolePermissionModel>,
  InferCreationAttributes<RolePermissionModel>
> {
  declare id: CreationOptional<number>;
  declare roleId: ForeignKey<RoleModel['id']>;
  declare permissionId: ForeignKey<PermissionModel['id']>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

RolePermissionModel.init({
  id: {
    field: 'rop_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    field: 'rop_dat_created_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'rop_dat_updated_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'rop_dat_deleted_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'RolePermissionModel',
  tableName: 'tb_roles_permissions',
  timestamps: true,
  paranoid: true,
});

export default RolePermissionModel;
