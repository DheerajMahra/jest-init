const forEach = require('../mock');

const mockCallback = jest.fn(x => 10 + x);

forEach([0, 1], mockCallback);

test('mockCallback function is called 2 times', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
});

test('The first argument of the first call to the mockCallback was 0', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
});

test('The first argument of the second call to the mockCallback was 1', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test('The return value of the second call to the function was 42', () => {
    expect(mockCallback.mock.results[1].value).toBe(11);
});