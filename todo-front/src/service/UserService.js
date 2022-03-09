import axios from "axios";

const URL = "http://localhost:8080/checkUser";
const URL_REGISTER = "http://localhost:8080/register"

class UserService {

  registerUser(userName, password) {
    return axios.post(URL_REGISTER, {
      username: userName,
      pwd: password
    }).catch(error => {
      console.log('error')
      return 'error'
    })
  }


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