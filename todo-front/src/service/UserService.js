import axios from "axios";

const URL = "http://localhost:8080/checkUser";

class UserService {
  checkUser(userName, password) {
    return axios.post(URL, {
      username: userName,
      pwd: password
    }).catch(error => {
      console.log(error);
      return 'error';
    });
  }
}

export default new UserService;