import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '.';

class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare password: string;
  declare isActive: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

UserModel.init({
  id: {
    autoIncrement: true,
    field: 'use_id',
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    field: 'use_des_name',
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
    allowNull: false,
    field: 'use_des_email',
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
    allowNull: false,
    field: 'use_des_password',
    type: DataTypes.STRING(60),
    validate: {
      notNull: {
        msg: 'Password is required.',
      },
    },
  },
  isActive: {
    allowNull: false,
    defaultValue: true,
    field: 'use_ind_active',
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    field: 'use_dat_created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    field: 'use_dat_updated_at',
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'use_dat_deleted_at',
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
