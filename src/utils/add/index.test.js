import add from './index'

// Example of a simple unit test
it('Adds numbers correctly', () => {
  // It guarantees that both assertions are made
  expect.assertions(2)
  // Uncomment the following code to make sure expect.assertions is working
  // if (true) return
  expect(add(1, 2)).toEqual(3)
  expect(add(2, 2)).toEqual(4)
})
