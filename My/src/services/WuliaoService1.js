import http from "../http-common";

class WuliaoService1 {
  

  // img1(data) {
  //   return http.post("/upload",data);
  // }

  getAll() {
    return http.get("/Wuliao1");
  }

  get(id) {
    return http.get(`/Wuliao1/${id}`);
  }

  create(data) {
    return http.post("/Wuliao1", data);
  }

  update(id, data) {
    return http.put(`/Wuliao1/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Wuliao1/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new WuliaoService1();