import { UpDownPipe } from './updown.pipe';
import { } from 'jasmine';

describe('UpDownPipe', function() {

  let pipe: UpDownPipe;

  beforeEach(() => {
    pipe = new UpDownPipe();
  });

  it('should transform string into UpDownCase', () => {
    expect(pipe.transform('pipes')).toEqual('PiPeS', 'transforms string');
  });

  it('should transform nothing', () => {
    expect(pipe.transform('')).toBe('', 'transforms empty string');
  });
});
