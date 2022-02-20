import { UserService } from '../../../src/services/User'
import { list } from '../../mocks/users';

describe('UserService', () => {
  describe('List', () => {
    it('should return 3 users and the correct collection', () => {
      const userService = UserService.getInstance();
      const users = userService.list();

      expect(users).toEqual(list);
      expect(users.length).toBe(list.length);
    });
  });

  describe('Show', () => {
    it('should return user correct', () => {
      const userService = UserService.getInstance();
      const id = 1;
      const user = userService.show(id);

      expect(typeof user).toBe('object');
      expect(user).toEqual(list[0]);
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user?.id).toBe(1);
      expect(user?.name).toBe('user_1');
    });

    it('should throw error when user not found', () => {
      expect.assertions(1);

      try {
        const userService = UserService.getInstance();
        const id = 4;
        userService.show(id);
      } catch (error) {
        expect(error.message).toBe('User not found!');
      }
    });
  });
});
