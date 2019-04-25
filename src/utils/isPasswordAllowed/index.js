const isPasswordAllowed = password =>
  password.length > 6 && /\d/.test(password) && /\D/.test(password)

export default isPasswordAllowed
