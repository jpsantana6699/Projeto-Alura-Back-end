import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '.';

class PermissionRouteModel extends Model<
  InferAttributes<PermissionRouteModel>,
  InferCreationAttributes<PermissionRouteModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

PermissionRouteModel.init({
  id: {
    autoIncrement: true,
    field: 'pero_id',
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    field: 'pero_des_name',
    type: DataTypes.STRING(80),
    validate: {
      is: {
        args: /^[a-zA-Zà-úÀ-Ú]+( [a-zA-Zà-úÀ-Ú]+)*$/,
        //eslint-disable-next-line @stylistic/max-len
        msg: 'Invalid name format (regex: /^[a-zA-Zà-úÀ-Ú]+( [a-zA-Zà-úÀ-Ú]+)*$/)',
      },
      notNull: {
        msg: 'Name is required',
      },
    },
  },
  description:{
    allowNull: true,
    field: 'pero_des_description',
    type: DataTypes.STRING(320),
  },
  createdAt: {
    allowNull: false,
    field: 'pero_dat_created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    field: 'pero_dat_updated_at',
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'pero_dat_deleted_at',
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'PermissionRouteModel',
  tableName: 'tb_permissions_routes',
  timestamps: true,
  paranoid: true,
});

export default PermissionRouteModel;
