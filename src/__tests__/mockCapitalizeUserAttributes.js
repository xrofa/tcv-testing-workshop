import * as utilsMock from '../utils'
import capitalizeUserAttributes from '../utils/capitalizeUserAttributes/index'

jest.mock('../utils', () => {
  return {
    capitalizeString: jest.fn(string => string)
  }
})

const user = {
  firstName: 'pedro',
  lastName: 'lopes',
  age: 26,
  email: 'pedro.lopes@thecodeventure.com'
}

test('Mock capitalizeString', () => {
  expect(capitalizeUserAttributes(user)).toEqual({
    firstName: 'pedro',
    lastName: 'lopes',
    age: 26,
    email: 'pedro.lopes@thecodeventure.com'
  })

  expect(utilsMock.capitalizeString).toHaveBeenCalledTimes(3)
})
