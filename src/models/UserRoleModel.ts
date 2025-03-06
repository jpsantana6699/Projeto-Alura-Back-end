import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import RoleModel from './RoleModel';
import UserModel from './UserModel';
import sequelize from '.';

class UserRoleModel extends Model<
  InferAttributes<UserRoleModel>,
  InferCreationAttributes<UserRoleModel>
> {
  declare id: CreationOptional<number>;
  declare userId: ForeignKey<UserModel['id']>;
  declare roleId: ForeignKey<RoleModel['id']>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

UserRoleModel.init({
  id: {
    field: 'usr_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    field: 'use_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    validate: {
      notNull: {
        msg: 'User ID is required',
      },
    },
  },
  roleId: {
    field: 'rol_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    validate: {
      notNull: {
        msg: 'Role ID is required',
      },
    },
  },
  createdAt: {
    field: 'usr_dat_created_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'usr_dat_updated_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'usr_dat_deleted_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'UserRoleModel',
  tableName: 'tb_users_roles',
  timestamps: true,
  paranoid: true,
});

export default UserRoleModel;
