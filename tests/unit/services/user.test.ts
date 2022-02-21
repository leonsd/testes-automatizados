import { UserModel } from '../../../src/models/User';
import { UserRepository } from '../../../src/repositories/User';
import { UserService } from '../../../src/services/User';

jest.mock('../../../src/repositories/User');
jest.mock('../../../src/models/User');

const UserRepositoryMock = UserRepository as jest.MockedClass<typeof UserRepository>;
const UserModelMock = UserModel as jest.MockedClass<typeof UserModel>;

describe('UserService', () => {
  describe('List', () => {
    it('should call userRepository.list with correct params', async () => {
      const userRepository = new UserRepositoryMock(UserModelMock);
      const userService = new UserService(userRepository);
      const filters = { name: 'any_user' };
      await userService.list(filters);

      expect(userRepository.list).toBeCalledTimes(1);
      expect(userRepository.list).toBeCalledWith(filters);
    });
  });
});
