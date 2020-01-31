import { TransformObjectToArrPipe } from './transform-object-to-arr.pipe';

describe('TransformObjectToArrPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformObjectToArrPipe();
    expect(pipe).toBeTruthy();
  });
});
