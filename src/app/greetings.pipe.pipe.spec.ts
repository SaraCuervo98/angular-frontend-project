import { Greetings.PipePipe } from './greetings.pipe.pipe';

describe('Greetings.PipePipe', () => {
  it('create an instance', () => {
    const pipe = new Greetings.PipePipe();
    expect(pipe).toBeTruthy();
  });
});
