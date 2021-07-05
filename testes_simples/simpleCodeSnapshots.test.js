const sum = require('./sum')
const copyArray = require('./copyArray')
const forEach = require('./forEach')
const sumForEach = require('./sumForEach')

// expect.addSnapshotSerializer({
//   test: (val) => val == 5,
//   print: (val) => 'cinco'
// });

expect.addSnapshotSerializer({
  test: (val) => val.type && val.value,
  print: (val) => `${val.type}: ${val.value}`
})

test('adds 3 + 3 to equal 6', () => {
  expect(sum(3, 3)).toMatchSnapshot();
});

test('adds 3 + 2 to equal 5', () => {
  expect(sum(3, 2)).toMatchInlineSnapshot(`5`);
});

test('adding works sanely with decimals', () => {

  expect(0.2 + 0.1).toMatchSnapshot();
});

it("should return the ingredient of the phrases", () => {
  regex = /(?:\d+)(?:(?:\se\s\d\/\d) | (?:\/\d)(?:\s+de)?)?(?:\s+\w+(?:(?:\s+de\s+sopa)|(?:\s+\(.+\)))?(?:\s+de))?\s+((?:\w|-)+(?:\s+\w+)*)(?:\s+\(.+\))?$/
  expect("1 colher (sopa) de oleo").toMatch(regex)
  expect(regex.exec("1 colher (sopa) de oleo")[1]).toMatchSnapshot()
})


test("tests the sumForEach function with snapshots", () => {
  const funcao = jest.fn();
  funcao.mockReturnValueOnce(10).mockReturnValueOnce(2).mockReturnValue(4);

  expect(sumForEach([1, 2, 3, 4, 5], funcao)).toMatchSnapshot();

  expect(funcao.mock.results).toMatchSnapshot();

})