import isPasswordAllowed from './index'

// Example of a Test Factory
describe('Are these passwords allowed', () => {
  const allowedPasswords = ['abc.1234.abc', '1abcab1', '12312ab']
  const notAllowedPasswords = ['', 'abcab', 'abcabc', '123123']

  allowedPasswords.forEach(password => {
    test(`"${password}" should be allowed`, () => {
      const isAllowed = isPasswordAllowed(password)
      expect(isAllowed).toEqual(true)
    })
  })

  notAllowedPasswords.forEach(password => {
    test(`"${password}" should not be allowed`, () => {
      const isAllowed = isPasswordAllowed(password)
      expect(isAllowed).toEqual(false)
    })
  })
})
