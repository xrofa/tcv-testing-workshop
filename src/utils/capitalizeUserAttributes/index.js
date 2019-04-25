import { capitalizeString } from '../index'

const capitalizeUserAttributes = user =>
  Object.keys(user).reduce((acc, curr) => {
    if (typeof user[curr] !== 'string') return { ...acc, [curr]: user[curr] }
    return { ...acc, [curr]: capitalizeString(user[curr]) }
  }, {})

export default capitalizeUserAttributes
