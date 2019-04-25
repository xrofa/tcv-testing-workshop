import capitalizeString from './index'

describe('Capitalize String', () => {
  test('capitalizes string', () => {
    const capitalizedString = capitalizeString('hello')
    expect(capitalizedString).toEqual('Hello')
  })

  test('capitalizes already capitalized string', () => {
    const capitalizedString = capitalizeString('Hello')
    expect(capitalizedString).toEqual('Hello')
  })

  test('doesnt capitalize an empty string', () => {
    const capitalizedString = capitalizeString('')
    expect(capitalizedString).toEqual('')
  })
})
