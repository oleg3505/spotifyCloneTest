import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

axios.defaults.baseURL = 'https://api.spotify.com';

export const Auth = {
  _token: null,

  async setToken(token) {
    this._token = token;
    await SecureStore.setItemAsync('__token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  loginWithToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.get('/v1/me');
  },

  isLoggedIn() {
    return !!this._token;
  },
};
