import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '.';

class CategoriaModel extends Model<
  InferAttributes<CategoriaModel>,
  InferCreationAttributes<CategoriaModel>
> {
  declare id: CreationOptional<number>;
  declare nome: string;
  declare descricao: string;
  declare isActive: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

CategoriaModel.init({
  id: {
    autoIncrement: true,
    field: 'cat_id',
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nome: {
    allowNull: false,
    field: 'cat_nome',
    type: DataTypes.STRING(80),
    validate: {
      notNull: {
        msg: 'O nome da categoria é obrigatório',
      },
    },
  },
  descricao: {
    allowNull: true,
    field: 'cat_descricao',
    type: DataTypes.STRING(255),
  },
  isActive: {
    allowNull: false,
    defaultValue: true,
    field: 'cat_ind_active',
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    field: 'cat_dat_created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    field: 'cat_dat_updated_at',
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'cat_dat_deleted_at',
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'CategoriaModel',
  tableName: 'tb_categorias',
  timestamps: true,
  paranoid: true,
});

export default CategoriaModel;
