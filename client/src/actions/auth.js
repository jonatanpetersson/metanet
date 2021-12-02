export const loginAction = (data) => {
  return {
    type: 'LOGIN',
    payload: {
      accessToken: data
    }
  }
}