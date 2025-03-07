import { 
  CreationAttributes, 
  Includeable, 
  Model, 
  ModelStatic, 
  WhereOptions, 
} from 'sequelize';

class Services<T extends Model> {
  constructor(private model: ModelStatic<T>) { }

  async create(data: CreationAttributes<T>) {
    return this.model.create(data);
  }

  async getAll(
    page: number,
    pageSize: number,
    include: Includeable[] = [],
    exclude: string[] = [],
    where?: WhereOptions,
  ) {
    return await this.model.findAll({
      attributes: { exclude: exclude },
      include: include,
      where: where,
      order: [['id', 'ASC']],
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }

  async getById(
    id: number,
    include: Includeable[] = [],
    exclude: string[] = [],
  ) {
    return await this.model.findByPk(id, {
      attributes: { exclude: exclude },
      include: include,
    });
  }

  async updateById(id: number, data: CreationAttributes<T>) {
    const exclude = Object.keys(this.model.getAttributes())
      .filter((column) => column !== 'id');
    const register = await this.getById(id, [], exclude);

    if (!register) return false;

    await register.update(data);

    return true;
  }
  
  async deleteById(id: number) {
    const register = await this.getById(id);
    if (!register) return false;
    register.destroy();
    return true;
  }
}

export default Services;
