import axios from "axios";

function login(email, password) {
  const data = JSON.stringify({
    email,
    password,
  });
  return axios
    .post("http://localhost:5000/login/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function registerTenant(fullname, username, gender, email, password, role) {
  const data = JSON.stringify({
    fullname,
    username,
    gender,
    email,
    password,
    role,
  });
  return axios.post("http://localhost:5000/signup/renter/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function registerLanlord(
  fullname,
  username,
  mobile_phone,
  email,
  password,
  role
) {
  const data = JSON.stringify({
    fullname,
    username,
    mobile_phone,
    email,
    password,
    role,
  });

  return axios.post("http://localhost:5000/signup/owner/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export const authenticationService = {
  login,
  logout,
  registerLanlord,
  registerTenant,
  getCurrentUser,
};
