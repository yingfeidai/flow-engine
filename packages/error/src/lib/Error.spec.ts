import { error } from './Error';

describe('error', () => {
  it('should work', () => {
    expect(error()).toEqual('error');
  });
});
