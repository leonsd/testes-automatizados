import '../../setup';
import { UserService } from '../../../src/services/User'
import { list } from '../../mocks/users';
import { UserModel } from '../../../src/models/User';

describe('UserService', () => {
  beforeEach(async () => {
    await UserModel.create({ id: 1, name: 'user_1' });
    await UserModel.create({ id: 2, name: 'user_2' });
    await UserModel.create({ id: 3, name: 'user_3' });
  });

  afterEach(async () => {
    await UserModel.destroy({ truncate: true });
  });

  describe('List', () => {
    it('should return 3 users and the correct collection', async () => {
      const userService = UserService.getInstance();
      const users = await userService.list();

      expect(users.length).toBe(list.length);
      users.forEach((user, index) => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user.id).toBe(list[index].id);
        expect(user.name).toBe(list[index].name);
      });
    });
  });

  describe('Show', () => {
    it('should return user correct', async () => {
      const userService = UserService.getInstance();
      const id = 1;
      const user = await userService.show(id);

      expect(typeof user).toBe('object');
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user?.id).toBe(list[0].id);
      expect(user?.name).toBe(list[0].name);
    });

    it('should throw error when user not found', async () => {
      expect.assertions(1);

      try {
        const userService = UserService.getInstance();
        const id = 4;
        await userService.show(id);
      } catch (error) {
        expect(error.message).toBe('User not found!');
      }
    });
  });

  describe('Destroy', () => {
    it('should return 3 users and the correct collection', async () => {
      expect.assertions(3);
      const id = 1;
      const userService = UserService.getInstance();
      await userService.destroy(id);
      const users = await userService.list();

      expect(users.length).toBe(list.length - 1);
      users.forEach((user) => {
        expect(user.id).not.toBe(id);
      });
    });
  });

  describe('Create', () => {
    it('should create user and return correct values', async () => {
      const data = {
        id: 4,
        name: 'user_4',
      };
      const userService = UserService.getInstance();
      const user = await userService.create(data);
      const users = await userService.list();

      expect(typeof user).toBe('object');
      expect(users.length).toBe(list.length + 1);
      expect(users[users.length - 1].id).toBe(user.id);
      expect(users[users.length - 1].name).toBe(user.name);
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user?.id).toBe(data.id);
      expect(user?.name).toBe(data.name);
    });
  });
});
