import { IFilters } from "../interfaces/IFilters";
import { UserModel } from '../models/User';

export class UserRepository {
  constructor(private readonly model: typeof UserModel) { }

  static getInstance() {
    return new UserRepository(UserModel);
  }

  create(data: any) {
    return this.model.create(data);
  }

  list(filters?: IFilters) {
    return this.model.findAll();
  }

  show(id: number) {
    return this.model.findOne({ where: { id } });
  }

  destroy(id: number) {
    return this.model.destroy({ where: { id } });
  }
}
