import * as someMath from '../src/someMath';
import {calculate} from '../src/someMath'


describe('calculate', () => {
  it('calls add and multiply with the correct arguments', () => {
    const a = 2;
    const b = 3;
    
    const addSpy = jest.spyOn(someMath, 'add') // If you use jest.spyOn after the function has been called, the spy won't track the previous call.
    const result = calculate(a,b)

    // Ensure 'add' were called with the correct arguments
    expect(addSpy).toHaveBeenCalledWith(a, b);
    expect(result).toBe(11)
  });
});


function something(a: number, b: number, somefn: (data: Array<{ x: number; y: number; id: string }>) => void) {
  somefn([
    {
      x: a,
      y: b,
      id: 'some-guid',
    },
  ]);
}

test('Testing something', () => {
  const mockSomeFn = jest.fn<void, [Array<{ x: number; y: number; id: string }>]>(); // Define the function signature
  something(2, 3, mockSomeFn);
  expect(mockSomeFn).toHaveBeenCalledWith(
    expect.arrayContaining([
      expect.objectContaining({
        x: 2,
        y: 3,
      })
    ])
  );
});
