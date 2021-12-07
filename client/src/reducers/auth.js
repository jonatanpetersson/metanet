export const authorization = (
  initialState = localStorage.jwt 
  ? JSON.parse(Buffer.from(localStorage.jwt.split('.')[1], 'base64')).username 
  : null, 
  action
  ) => {
  switch (action.type) {
    case 'LOGIN':
      if (action.payload.accessToken) {
        localStorage.setItem('jwt', action.payload.accessToken);
        return JSON.parse(Buffer.from(action.payload.accessToken.split('.')[1], 'base64')).username;
      } else {
        return initialState;
      }
    case 'LOGOUT':
      localStorage.removeItem('jwt');
      return null;
    case 'VERIFY_TOKEN':
      if (!localStorage.jwt) {
        return null;
      } else {
        const expirationTime = JSON.parse(Buffer.from(localStorage.jwt.split('.')[1], 'base64')).exp;
        const nowTime = Math.floor(new Date().getTime() / 1000);
        const expired = nowTime >= expirationTime;
        if (expired) {
          localStorage.removeItem('jwt');
          return null;
        } else {
          return JSON.parse(Buffer.from(localStorage.jwt.split('.')[1], 'base64')).username;
        }
      }
    default:
      return initialState;
  }
}

export default authorization;