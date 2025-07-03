import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from 'sequelize';
import PermissionModel from './PermissionModel';
import RoleModel from './RoleModel';
import sequelize from '.';

class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare password: string;
  declare roles: NonAttribute<RoleModel[]>;
  declare permissions: NonAttribute<PermissionModel[]>;
  declare isActive: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

UserModel.init({
  id: {
    field: 'use_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    field: 'use_des_name',
    allowNull: false,
    type: DataTypes.STRING(80),
    validate: {
      is: {
        args: /^[a-zA-Zà-úÀ-Ú]+( [a-zA-Zà-úÀ-Ú]+)*$/,
        // eslint-disable-next-line @stylistic/max-len
        msg: 'Invalid name format (regex: /^[a-zA-Zà-úÀ-Ú]+( [a-zA-Zà-úÀ-Ú]+)*$/)',
      },
      notNull: {
        msg: 'Name is required.',
      },
    },
  },
  email: {
    field: 'use_des_email',
    allowNull: false,
    type: DataTypes.STRING(320),
    unique: {
      name: 'tb_users_use_des_email_key',
      msg: 'Email already exists.',
    },
    validate: {
      isEmail: {
        msg: 'Invalid email.',
      },
      notNull: {
        msg: 'Email is required.',
      },
    },
  },
  password: {
    field: 'use_des_password',
    allowNull: false,
    type: DataTypes.STRING(60),
    validate: {
      notNull: {
        msg: 'Password is required.',
      },
    },
  },
  isActive: {
    field: 'use_ind_active',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createdAt: {
    field: 'use_dat_created_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'use_dat_updated_at',
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'use_dat_deleted_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'UserModel',
  tableName: 'tb_users',
  timestamps: true,
  paranoid: true,
});

export default UserModel;
