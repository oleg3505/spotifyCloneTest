import { createThunk, model, Model } from 'mst-collection';
import Api from '../../../api';
import * as SecureStore from 'expo-secure-store';

class Auth extends Model({
  isLoggedIn: false,
}) {
  setIsLoggedIn(status) {
    this.isLoggedIn = status;
  }

  async loginCheck() {
    try {
      const token = await SecureStore.getItemAsync('__token');
      if (!token) {
        return this.isLoggedIn;
      }

      const res = await Api.Auth.loginWithToken(token);

      if (res.data) {
        this.setIsLoggedIn(true);
        return this.isLoggedIn;
      }
    } catch (err) {
      console.log(err);
      return this.isLoggedIn;
    }
  }
}

export const AuthModel = model(Auth);
