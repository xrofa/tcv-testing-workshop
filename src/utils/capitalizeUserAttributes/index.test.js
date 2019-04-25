import capitalizeUserAttributes from './index'

const user = {
  firstName: 'pedro',
  lastName: 'lopes',
  age: 26,
  email: 'pedro.lopes@thecodeventure.com'
}

const anotherUser = {
  firstName: 'christian',
  lastName: 'sousa',
  age: 28,
  email: 'christian.sousa@theventurecode.com'
}
// Example of a test using a schema to assert
test('should capitalize user attributes', () => {
  expect(capitalizeUserAttributes(user)).toEqual({
    firstName: 'Pedro',
    lastName: 'Lopes',
    age: 26,
    email: 'Pedro.lopes@thecodeventure.com'
  })

  expect(capitalizeUserAttributes(anotherUser)).toEqual({
    firstName: 'Christian',
    lastName: 'Sousa',
    age: 28,
    email: 'Christian.sousa@theventurecode.com'
  })
})

test('should match a well defined schema', () => {
  const schema = {
    firstName: expect.any(String),
    lastName: expect.any(String),
    age: expect.any(Number),
    email: expect.stringContaining('thecodeventure.com')
  }

  expect(capitalizeUserAttributes(user)).toEqual(schema)
  expect(capitalizeUserAttributes(anotherUser)).not.toEqual(schema)
})
