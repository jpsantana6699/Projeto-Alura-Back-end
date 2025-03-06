import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '.';

class PermissionTypeModel extends Model<
  InferAttributes<PermissionTypeModel>,
  InferCreationAttributes<PermissionTypeModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

PermissionTypeModel.init({
  id: {
    field: 'pet_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    field: 'pet_des_name',
    allowNull: false,
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
  description: {
    field: 'pet_des_description',
    allowNull: true,
    type: DataTypes.STRING(320),
  },
  createdAt: {
    field: 'pet_dat_created_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'pet_dat_updated_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'pet_dat_deleted_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'PermissionTypeModel',
  tableName: 'tb_permissions_types',
  timestamps: true,
  paranoid: true,
});

export default PermissionTypeModel;
