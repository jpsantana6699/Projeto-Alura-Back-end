import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import PermissionModel from './PermissionModel';
import UserModel from './UserModel';
import sequelize from '.';

class UserPermissionModel extends Model<
  InferAttributes<UserPermissionModel>,
  InferCreationAttributes<UserPermissionModel>
> {
  declare id: CreationOptional<number>;
  declare userId: ForeignKey<UserModel['id']>;
  declare permissionId: ForeignKey<PermissionModel['id']>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

UserPermissionModel.init({
  id: {
    field: 'usp_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    field: 'usp_dat_created_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'usp_dat_updated_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'usp_dat_deleted_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'UserPermissionModel',
  tableName: 'tb_users_permissions',
  timestamps: true,
  paranoid: true,
});

export default UserPermissionModel;
