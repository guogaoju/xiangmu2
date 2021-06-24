import http from "../http-common";
class RongziService {
  getAll() {
    return http.get("/Rongzi");
  }
  findByLog(caigouId) {
    return http.get(`/Rongzi?caigouId=${caigouId}`);
  }
  get(id) {
    return http.get(`/Rongzi/${id}`);
  }
  create(data) {
    return http.post("/Rongzi", data);
  }
  update(id, data) {
    return http.put(`/Rongzi/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Rongzi/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new RongziService();