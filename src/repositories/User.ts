import { IFilters } from "../interfaces/IFilters";
import { IUser } from "../interfaces/IUser";

export class UserRepository {
  private users: IUser[];

  constructor() {
    this.users = [
      { id: 1, name: 'user_1' },
      { id: 2, name: 'user_2' },
      { id: 3, name: 'user_3' },
    ];
  }

  static getInstance() {
    return new UserRepository();
  }

  list(filters?: IFilters) {
    return this.users;
  }

  show(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}
