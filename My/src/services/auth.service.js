// import axios from 'axios';
import http from "../http-common";
class AuthService {
  login(user) {
    return http
      .post('signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return http.post('signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();