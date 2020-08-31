import axios from "axios";
const baseUrl = "http://localhost:3000/api/";

export default {
  dCandidate(url = baseUrl + "dcandidate/") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newReacord) => axios.post(url, newReacord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
};
