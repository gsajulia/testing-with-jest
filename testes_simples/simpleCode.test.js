const sum = require('./sum')
const copyArray = require('./copyArray')
const forEach = require('./forEach')
const sumForEach = require('./sumForEach')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('compare two arrays that have the same values', () => {
  const array = [9, 8, 7]
  expect(copyArray(array)).toBe(array);
})

test('copy the array to another variable', () => {
  const array = [9, 8, 7]
  expect(copyArray(array)).toEqual(array);
  expect(copyArray(array)).not.toBe(array);
})

test('checks if the array contain the values 8 and 9', () => {
  const array = [9, 8, 7]
  expect(copyArray(array)).toContain(8, 9);
})


test('adding works sanely with decimals', () => {

  expect(0.2 + 0.104).toBeCloseTo(0.3);
  expect(0.2 + 0.105).not.toBeCloseTo(0.3);
  expect(0.2 + 0.1).toBeCloseTo(0.3, 15);
  expect(0.2 + 0.1).not.toBeCloseTo(0.3, 16);
});

test('verify if the regex can match strings with numbers', () => {
  expect("palavra").not.toMatch(/\d/)
  expect("palavras e o numero 2").toMatch(/\d/)
})

it("should return the ingredient of the phrases", () => {
  regex = /(?:\d+)(?:(?:\se\s\d\/\d) | (?:\/\d)(?:\s+de)?)?(?:\s+\w+(?:(?:\s+de\s+sopa)|(?:\s+\(.+\)))?(?:\s+de))?\s+((?:\w|-)+(?:\s+\w+)*)(?:\s+\(.+\))?$/
  expect("1 colher (sopa) de oleo").toMatch(regex)
})


it("should call the mock function 2 times", () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([3, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(3);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(45);
})

test("tests the function sumForEach", () => {
  const funcao = jest.fn();
  funcao.mockReturnValueOnce(10).mockReturnValueOnce(2).mockReturnValue(4);

  expect(sumForEach([1, 2, 3, 4, 5], funcao)).toEqual([10, 3, 6, 7, 8]);

  expect(funcao.mock.calls.length).toBe(5);

  expect(funcao.mock.results[0].value).toBe(10);
  expect(funcao.mock.results[1].value).toBe(2);
  expect(funcao.mock.results[2].value).toBe(4);
  expect(funcao.mock.results[3].value).toBe(4);
  expect(funcao.mock.results[4].value).toBe(4);

})
