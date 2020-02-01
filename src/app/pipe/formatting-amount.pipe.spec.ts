import { FormattingAmountPipe } from './formatting-amount.pipe';

describe('FormattingAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new FormattingAmountPipe();
    expect(pipe).toBeTruthy();
  });
});
