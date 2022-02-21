import { IFilters } from "../interfaces/IFilters";
import { UserRepository } from '../repositories/User';

export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  static getInstance() {
    return new UserService(UserRepository.getInstance());
  }

  create(data: any) {
    return this.userRepository.create(data);
  }

  async list(filters?: IFilters) {
    return this.userRepository.list(filters);
  }

  async show(id: number) {
    const user = await this.userRepository.show(id);

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }

  destroy(id: number) {
    return this.userRepository.destroy(id);
  }
}
