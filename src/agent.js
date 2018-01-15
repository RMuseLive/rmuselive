import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = "https://rmuse.live/api/1";
//const API_ROOT = "http://localhost:3000/api/1";

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set("Authorization", token);
  }
};

const responseBody = res => res.body;
const requests = {
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  delete: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody)
};

const Auth = {
  current: () => requests.get("/user"),
  login: (email, password) => requests.post("/login", { email, password }),
  register: (username, email, firstname, lastname, password, artist) =>
    requests.post("/user", { username, email, firstname, lastname, password, artist })
};

export default {
  Auth,
  requests,
  setToken: _token => {
    token = _token;
  },
  token
};
