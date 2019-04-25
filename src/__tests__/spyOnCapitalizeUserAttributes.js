import * as utils from '../utils'
import capitalizeUserAttributes from '../utils/capitalizeUserAttributes/index'

const user = {
  firstName: 'pedro',
  lastName: 'lopes',
  age: 26,
  email: 'pedro.lopes@thecodeventure.com'
}

test('Spy on capitalizeString', () => {
  jest.spyOn(utils, 'capitalizeString')
  utils.capitalizeString.mockImplementation(string => string)

  expect(capitalizeUserAttributes(user)).toEqual({
    firstName: 'pedro',
    lastName: 'lopes',
    age: 26,
    email: 'pedro.lopes@thecodeventure.com'
  })

  expect(utils.capitalizeString).toHaveBeenCalledTimes(3)
})
