export const loginAction = (data) => {
  return {
    type: 'LOGIN',
    payload: {
      accessToken: data
    }
  }
}

export const logoutAction = () => {
  return {
    type: 'LOGOUT'
  }
}