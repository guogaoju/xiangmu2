import http from "../http-common";

class QiyeService {
  getAll() {
    return http.get("/Qiye");
  }

  get(id) {
    return http.get(`/Qiye/${id}`);
  }

  create(data) {
    return http.post("/Qiye", data);
  }

  update(id, data) {
    return http.put(`/Qiye/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Qiye/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new QiyeService();