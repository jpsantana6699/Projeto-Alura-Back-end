import AutorModel from './Autor';
import CategoriaModel from './Categoria';
import LivroModel from './Livro';

export default function setupAssociations() {
  LivroModel.belongsToMany(AutorModel, {
    through: 'tb_livro_autores',
    foreignKey: 'liv_id',
    otherKey: 'aut_id',
    as: 'autores',
  });

  AutorModel.belongsToMany(LivroModel, {
    through: 'tb_livro_autores',
    foreignKey: 'aut_id',
    otherKey: 'liv_id',
    as: 'livros',
  });

  LivroModel.belongsTo(CategoriaModel, {
    foreignKey: 'cat_id',
    as: 'categoria',
  });
  
  CategoriaModel.hasMany(LivroModel, {
    foreignKey: 'cat_id',
    as: 'livros',
  });
  
}
