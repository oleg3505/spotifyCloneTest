import { createThunk, model, Model } from 'mst-collection';
import Api from '../../../api';
import * as SecureStore from 'expo-secure-store';

class Auth extends Model({
  loginStatus: false,
}) {
  setLoginStatus(status) {
    this.loginStatus = status;
  }

  async loginCheck() {
    try {
      const token = await SecureStore.getItemAsync('__token');
      if (!token) {
        return this.loginStatus;
      }

      const res = await Api.Auth.loginWithToken(token);

      if (res.data) {
        this.setLoginStatus(true);
        return this.loginStatus;
      }
    } catch (err) {
      console.log(err);
      return this.loginStatus;
    }
  }
}

export const AuthModel = model(Auth);
