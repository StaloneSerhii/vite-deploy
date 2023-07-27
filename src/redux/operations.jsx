import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://nodejs-hw-goit-03-restapi.onrender.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    console.log(credentials);
    try {
      const { data } = await axios.post(`/auth/register`, credentials);
      token.set(data.token);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post(`/auth/login`, credentials);
    token.set(data.token);
    return data;
  } catch (e) {
    if (e.response.status === 401) {
      return alert("Email не підтверджано!");
    }
    console.log(e);
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post(`/auth/logout`);
    token.unset();
  } catch (e) {
    console.log(e);
  }
});
