import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    info: localStorage.getItem("account")
      ? JSON.parse(localStorage.getItem("account"))
      : null,
    roles: null,
    settings: false,
  },
  reducers: {
    login(state, action) {
      state.roles = action.payload.role;
      state.info = action.payload.info;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem("account", JSON.stringify(action.payload.account));
      state.info = action.payload.account;
    },
    logout(state) {

        localStorage.setItem("account", null);
        localStorage.setItem("accessToken", null);
        localStorage.setItem("refreshToken", null);
        state.info = null;
        state.roles = null;
    },
    signup(state, action) {},
    signin(state, action) {
      state.roles = action.payload.roles;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      // localStorage.setItem('user', JSON.stringify(action.payload.infoUserResponse))
      // state.accessToken = action.payload.accessToken
      // state.refreshToken = action.payload.refreshToken
      state.current = action.payload.infoUserResponse;
    },
    // signinAdmin(state, action) {
    //   state.roles = action.payload.roles;
    //   localStorage.setItem("accessTokenAdmin", action.payload.accessToken);
    //   localStorage.setItem("refreshTokenAdmin", action.payload.refreshToken);
    // },
    // setProfile(state, action) {
    //   localStorage.setItem("user", JSON.stringify(action.payload.data));
    // },
    // logout(state) {
    //   localStorage.removeItem("user");
    //   localStorage.removeItem("accessToken");
    //   localStorage.removeItem("refreshToken");
    //   state.current = null;
    //   state.roles = null;
    // },
    // editInfo(state, action) {
    //   state.current = action.payload;
    // },
    // updateHost(state) {
    //   state.settings = true;
    // },
    refreshToken(state, action) {
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
  },
});

export default accountSlice;
