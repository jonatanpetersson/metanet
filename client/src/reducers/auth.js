export const authReducer = (initialState = localStorage.jwt ? true : false, action) => {
  switch (action.type) {
    case 'LOGIN':
      if (action.payload.accessToken) {
        localStorage.setItem('jwt', action.payload.accessToken);
        return true;
      } else {
        return initialState;
      }
    case 'LOGOUT':
      localStorage.removeItem('jwt');
      return false;
    default:
      return initialState;
  }
}

export default authReducer;