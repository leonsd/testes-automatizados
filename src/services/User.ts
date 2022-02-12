export class UserService {
  constructor() { }

  static getInstance() {
    return new UserService();
  }
}
