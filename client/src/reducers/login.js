export const loginReducer = (initialState = localStorage.jwt || '', action) => {
  switch (action.type) {
    case 'LOGIN':
      if (action.payload.accessToken) {
        localStorage.setItem('jwt', action.payload.accessToken);
        return action.payload.accessToken
      } else {
        return initialState;
      }
    default:
      return initialState;
  }
}

export default loginReducer;