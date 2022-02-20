import { IFilters } from "../interfaces/IFilters";
import { UserRepository } from '../repositories/User';

export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  static getInstance() {
    return new UserService(new UserRepository());
  }

  list(filters?: IFilters) {
    return this.userRepository.list(filters);
  }

  show(id: number) {
    const user = this.userRepository.show(id);

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }
}
