export const authReducer = (initialState = localStorage.jwt || '', action) => {
  switch (action.type) {
    case 'LOGIN':
      if (action.payload.accessToken) {
        localStorage.setItem('jwt', action.payload.accessToken);
        return action.payload.accessToken
      } else {
        return initialState;
      }
    case 'LOGOUT':
      localStorage.removeItem('jwt');
      return null;
    default:
      return initialState;
  }
}

export default authReducer;