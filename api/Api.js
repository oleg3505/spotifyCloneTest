import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

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
  async logOut() {
    this._token = null;
    await SecureStore.deleteItemAsync('__token');
  },

  isLoggedIn() {
    return !!this._token;
  },
};

export const Viewer = {
  getViewer() {
    return axios.get('https://api.spotify.com/v1/me');
  },
};

export const PlayLists = {
  getUserPlayListsById(id) {
    return axios.get(`https://api.spotify.com/v1/users/${id}/playlists`);
  },
};

export const Categories = {
  getCategoriesList() {
    return axios.get('https://api.spotify.com/v1/browse/categories');
  },

  getCategory(href) {
    return axios.get(`${href}`);
  },
};
