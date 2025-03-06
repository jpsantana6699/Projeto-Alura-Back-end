import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from 'sequelize';
import PermissionModel from './PermissionModel';
import sequelize from '.';

class RoleModel extends Model<
  InferAttributes<RoleModel>,
  InferCreationAttributes<RoleModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: CreationOptional<string>;
  declare permissions: NonAttribute<PermissionModel[]>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

RoleModel.init({
  id: {
    field: 'rol_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    field: 'rol_des_name',
    allowNull: false,
    type: DataTypes.STRING(80),
    validate: {
      is: {
        args: /^[a-zA-Zà-úÀ-Ú]+( [a-zA-Zà-úÀ-Ú]+)*$/,
        // eslint-disable-next-line @stylistic/max-len
        msg: 'Invalid name format (regex: /^[a-zA-Zà-úÀ-Ú]+( [a-zA-Zà-úÀ-Ú]+)*$/)',
      },
      notNull: {
        msg: 'Role name is required',
      },
    },
  },
  description: {
    field: 'rol_des_description',
    allowNull: true,
    type: DataTypes.STRING(500),
  },
  createdAt: {
    field: 'rol_dat_created_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'rol_dat_updated_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'rol_dat_deleted_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'RoleModel',
  tableName: 'tb_roles',
  timestamps: true,
  paranoid: true,
});

export default RoleModel;
