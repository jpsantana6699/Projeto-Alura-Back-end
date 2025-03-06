import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '.';

class AutorModel extends Model<
  InferAttributes<AutorModel>,
  InferCreationAttributes<AutorModel>
> {
  declare id: CreationOptional<number>;
  declare nome: string;
  declare nacionalidade: string;
  declare isActive: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

AutorModel.init({
  id: {
    autoIncrement: true,
    field: 'aut_id',
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nome: {
    allowNull: false,
    field: 'aut_nome',
    type: DataTypes.STRING(80),
    validate: {
      notNull: {
        msg: 'O nome do autor é obrigatório',
      },
    },
  },
  nacionalidade: {
    allowNull: true,
    field: 'aut_nacionalidade',
    type: DataTypes.STRING(50),
  },
  isActive: {
    allowNull: false,
    defaultValue: true,
    field: 'aut_ind_active',
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    field: 'aut_dat_created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    field: 'aut_dat_updated_at',
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'aut_dat_deleted_at',
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'AutorModel',
  tableName: 'tb_autores',
  timestamps: true,
  paranoid: true,
});

export default AutorModel;
