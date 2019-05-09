export function checkCredentials(params) {
  if (params.username === 'Admin' && params.password === '12345') {
    localStorage.setItem('isAuth', true)
    return true
  }
  localStorage.setItem('isAuth', '')
  return false
}