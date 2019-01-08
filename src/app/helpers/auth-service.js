import jsCookie from 'js-cookie';
import jsHttpCookie from 'cookie';

export default class AuthService {
  loggedIn = req => {
    const token = this.getToken(req);
    return !!token;
  };

  setUser = user => {
    localStorage.setItem('user', JSON.stringify(user));
    jsCookie.set('user', JSON.stringify(user));
  };

  getUser = req => {
    if (req && req.headers) {
      const cookies = req.headers.cookie;
      if (typeof cookies === 'string') {
        const cookiesData = jsHttpCookie.parse(cookies);
        return JSON.parse(cookiesData.user);
      }
      return;
    }
    const user = localStorage.getItem('user');
    return user ? JSON.parse(localStorage.user) : {};
  };

  setToken = token => {
    localStorage.setItem('accessToken', token);
    jsCookie.set('accessToken', token);
  };

  getToken = req => {
    if (req && req.headers) {
      const cookies = req.headers.cookie;
      if (typeof cookies === 'string') {
        const cookiesData = jsHttpCookie.parse(cookies);
        return cookiesData.accessToken;
      }
      return;
    }
    return localStorage.getItem('accessToken');
  };

  removeToken = () => {
    jsCookie.remove('accessToken');
    jsCookie.remove('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  };
}
