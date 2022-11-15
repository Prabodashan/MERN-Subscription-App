import axios from "axios";
import { getFromLocalStorage } from "../storage-services/local";
import { USER_TOKEN } from "../storage-services/keys/local";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const get = async (path = "") => {
  const token = (await getFromLocalStorage(USER_TOKEN)) || "";
  const configHeaders = {};
  if (token) {
    configHeaders["headers"] = {
      Authorization: `Bearer ${token}`,
    };
  }
  let url = "";
  url = path;
  return new Promise((resolve, reject) => {
    axios
      .get(url, configHeaders)
      .then((response) => {
        if (response.status === 200 && response.data) {
          if (response.data.error) {
            reject(response.data);
          } else {
            resolve(response.data);
          }
        } else if (
          response.status === 200 ||
          response.status === 201 ||
          response.status === 204
        ) {
          reject({ error: "Status : " + response.status + " no content." });
        } else {
          reject({
            error: response.status
              ? "An status : " + response.status + " has occurred."
              : "An unexpected error has occurred.",
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          reject({
            error:
              error.response.statusText || "An unexpected error has occurred.",
          });
        } else {
          reject({ error: "An unexpected error has occurred." });
        }
      });
  });
};

const post = async (path = "", req) => {
  const token = (await getFromLocalStorage(USER_TOKEN)) || "";
  const configHeaders = {};
  if (token) {
    configHeaders["headers"] = {
      Authorization: `Bearer ${token}`,
    };
  }
  let url = "";
  url = path;
  return new Promise((resolve, reject) => {
    axios
      .post(url, req, false, configHeaders)
      .then((response) => {
        if (response.status === 200 && response.data) {
          if (response.data.error) {
            reject(response.data);
          } else {
            resolve(response.data);
          }
        } else if (
          response.status === 200 ||
          response.status === 201 ||
          response.status === 204
        ) {
          reject({ error: "Status : " + response.status + " no content." });
        } else {
          reject({
            error: response.status
              ? "An status : " + response.status + " has occurred."
              : "An unexpected error has occurred.",
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          reject({
            error:
              error.response.statusText || "An unexpected error has occurred.",
          });
        } else {
          reject({ error: "An unexpected error has occurred." });
        }
      });
  });
};

// const getFileFromApi = (path = '', requestToken = '', requestSecret = null) => {
const getFileFromApi = (path = "", requestToken = "") => {
  const configHeaders = {
    headers: {
      requestToken: requestToken,
      signature: "",
    },
    responseType: "arraybuffer",
  };

  let url = "";
  // if (process.browser) {
  //     url = process.env.HOLA_ADMIN_API_URL + path;
  // } else {
  //     url = process.env.HOLA_ADMIN_DOMAIN + path;
  // }
  url = "https://holariderapi.azurewebsites.net/api/" + path;

  return new Promise((resolve, reject) => {
    axios
      .get(url, configHeaders)
      .then((response) => {
        if (response.status === 200 && response.data) {
          if (response.data.error) {
            reject(response.data);
          } else {
            resolve(response.data);
          }
        } else if (
          response.status === 200 ||
          response.status === 201 ||
          response.status === 204
        ) {
          reject({ error: "Status : " + response.status + " no content." });
        } else {
          reject({
            error: response.status
              ? "An status : " + response.status + " has occurred."
              : "An unexpected error has occurred.",
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          reject({
            error:
              error.response.statusText || "An unexpected error has occurred.",
          });
        } else {
          reject({ error: "An unexpected error has occurred." });
        }
        console.log(error);
      });
  });
};

const postUploadFile = (path = "", requestToken = "", key, id = 0, file) => {
  // console.log(file.type);
  const configHeaders = {
    headers: {
      requestToken: requestToken,
      signature: "",
      id: id,
      filename: file.name || "",
      filetype: file.filetype || file.type || "image/jpeg",
      key: key || "",
    },
  };
  let url = "";
  url = path;

  return new Promise((resolve, reject) => {
    axios
      .post(url, file, configHeaders)
      .then((response) => {
        if (response.status === 200 && response.data) {
          if (response.data.error) {
            reject(response.data);
          } else {
            resolve(response.data);
          }
        } else if (
          response.status === 200 ||
          response.status === 201 ||
          response.status === 204
        ) {
          reject({ error: "Status : " + response.status + " no content." });
        } else {
          reject({
            error: response.status
              ? "An status : " + response.status + " has occurred."
              : "An unexpected error has occurred.",
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          reject({
            error:
              error.response.statusText || "An unexpected error has occurred.",
          });
        } else {
          reject({ error: "An unexpected error has occurred." });
        }
      });
  });
};

export { get, post, postUploadFile, getFileFromApi };
