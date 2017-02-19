import { } from 'jasmine';

import { UpDownPipe } from './updown.pipe';

describe('UpDownPipe', function() {

  let pipe: UpDownPipe;

  beforeEach(() => {
    pipe = new UpDownPipe();
  });

  it('should transform string into UpDownCase', () => {
    expect(pipe.transform('pipes')).toEqual('PiPeS');
  });

  it('should transform nothing', () => {
    expect(pipe.transform('')).toBe('');
  });
});
