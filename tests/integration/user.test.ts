import '../setup';
import { User } from '../../src/models/User';

describe('User', () => {
  it('should create user', async () => {
    const user = await User.create({ name: 'Leonardo' });

    expect(user.name).toBe('Leonardo');
  });
});
