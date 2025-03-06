import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import AutorModel from './Autor';
import CategoriaModel from './Categoria';
import sequelize from '.';

class LivroModel extends Model<
  InferAttributes<LivroModel>,
  InferCreationAttributes<LivroModel>
> {
  declare id: CreationOptional<number>;
  declare autorId: ForeignKey<AutorModel['id']>;
  declare categoriaId: ForeignKey<CategoriaModel['id']>;
  declare titulo: string;
  declare descricao: string;
  declare preco: number;
  declare editora: string;
  declare paginas: number;
  declare isActive: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

LivroModel.init({
  id: {
    autoIncrement: true,
    field: 'liv_id',
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  autorId: {
    allowNull: false,
    field: 'aut_id',
    type: DataTypes.INTEGER,
    validate: {
      notNull: {
        msg: 'O ID do autor é obrigatório',
      },
    },
  },
  categoriaId: {
    allowNull: false,
    field: 'cat_id',
    type: DataTypes.INTEGER,
    validate: {
      notNull: {
        msg: 'O ID da categoria é obrigatório',
      },
    },
  },
  titulo: {
    allowNull: false,
    field: 'liv_titulo',
    type: DataTypes.STRING(80),
    validate: {
      notNull: {
        msg: 'O título do livro é obrigatório',
      },
    },
  },
  descricao: {
    allowNull: true,
    field: 'liv_descricao',
    type: DataTypes.STRING(255),
  },
  preco: {
    allowNull: false,
    field: 'liv_preco',
    type: DataTypes.DECIMAL(10, 2),
    validate: {
      notNull: {
        msg: 'O preço do livro é obrigatório',
      },
    },
  },
  editora: {
    allowNull: false,
    field: 'liv_editora',
    type: DataTypes.STRING(80),
    validate: {
      notNull: {
        msg: 'A editora do livro é obrigatória',
      },
    },
  },
  paginas: {
    allowNull: false,
    field: 'liv_paginas',
    type: DataTypes.INTEGER,
    validate: {
      notNull: {
        msg: 'O número de páginas do livro é obrigatório',
      },
    },
  },
  isActive: {
    allowNull: false,
    defaultValue: true,
    field: 'liv_ind_active',
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    field: 'liv_dat_created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    field: 'liv_dat_updated_at',
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: 'liv_dat_deleted_at',
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'LivroModel',
  tableName: 'tb_livros',
  timestamps: true,
  paranoid: true,
});

// Relacionamentos
LivroModel.belongsTo(AutorModel, {
  as: 'autor',
  foreignKey: 'aut_id',
});

AutorModel.hasMany(LivroModel, {
  as: 'livros',
  foreignKey: 'aut_id',
});

LivroModel.belongsTo(CategoriaModel, {
  as: 'categoria',
  foreignKey: 'cat_id',
});

CategoriaModel.hasMany(LivroModel, {
  as: 'livros',
  foreignKey: 'cat_id',
});

export default LivroModel;
