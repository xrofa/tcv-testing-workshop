import * as utils from '../utils'
import capitalizeUserAttributes from '../utils/capitalizeUserAttributes/index'

const user = {
  firstName: 'pedro',
  lastName: 'lopes',
  age: 26,
  email: 'pedro.lopes@thecodeventure.com'
}

test('Monkey patches capitalizeString', () => {
  const originalCapitalizeString = utils.capitalizeString

  utils.capitalizeString = string => string

  expect(capitalizeUserAttributes(user)).toEqual({
    firstName: 'pedro',
    lastName: 'lopes',
    age: 26,
    email: 'pedro.lopes@thecodeventure.com'
  })

  utils.capitalizeString = originalCapitalizeString
})

test('CapitalizeString should be called 4 times', () => {
  const originalCapitalizeString = utils.capitalizeString

  utils.capitalizeString = (...args) => {
    utils.capitalizeString.mock.calls.push(args)
    return args[0]
  }
  utils.capitalizeString.mock = { calls: [] }

  expect(capitalizeUserAttributes(user)).toEqual({
    firstName: 'pedro',
    lastName: 'lopes',
    age: 26,
    email: 'pedro.lopes@thecodeventure.com'
  })
  expect(utils.capitalizeString.mock.calls).toHaveLength(3)

  expect(utils.capitalizeString.mock.calls[0]).toEqual(['pedro'])
  expect(utils.capitalizeString.mock.calls[1]).toEqual(['lopes'])
  expect(utils.capitalizeString.mock.calls[2]).toEqual([
    'pedro.lopes@thecodeventure.com'
  ])
  utils.capitalizeString = originalCapitalizeString
})
