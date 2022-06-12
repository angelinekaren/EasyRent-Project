import axios from "axios";

function login(email, password) {
  const data = JSON.stringify({
    email,
    password,
  });
  return axios
    .post("/api/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
        if (res.data.user?.role === "tenant") {
          localStorage.setItem(
            "favorites",
            JSON.stringify(res.data.user?.favorites)
          );
        }
      }
      return res.data;
    });
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("favorites");
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
  return axios.post("/api/signup/renter/", data, {
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

  return axios.post("/api/signup/owner/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function forgetPassword(email) {
  return axios.post("/api/forgetPassword/", JSON.stringify({ email }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function resetPassword(userId, token, password) {
  const data = JSON.stringify({
    userId,
    token,
    password,
  });

  return axios.put("/api/resetPassword/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function unauthorized() {
  return axios.post("/api/privateRoute", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const authenticationService = {
  login,
  logout,
  registerLanlord,
  registerTenant,
  getCurrentUser,
  forgetPassword,
  resetPassword,
  unauthorized,
};
