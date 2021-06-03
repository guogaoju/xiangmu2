
import http from "../http-common";
class AuthService {
  getAll() {
    return http.get("signselectAll");
  }
  get(userid) {
    return http.get(`/signselect/${userid}`);
  }
  update(userid, data) {
    return http.put(`/signupdate/${userid}`, data);
  }
  delete(userid) {
    return http.delete(`/signdelete/${userid}`);
  }
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
      name:user.name,
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();