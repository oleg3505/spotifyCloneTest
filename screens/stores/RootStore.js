import { types } from 'mobx-state-tree';
import * as SecureStore from 'expo-secure-store';

import Api from '../../api';

export const RootStore = types.model('RootStore', {}).actions((store) => ({
  async bootstrap() {
    let log = false;
    try {
      const token = await SecureStore.getItemAsync('__token');
      if (!token) {
        return log;
      }

      const res = await Api.Auth.loginWithToken(token);
      if (res.data) {
        log = true;
        return log;
      }
    } catch (err) {
      console.log(err);
      return log;
    }
  },
}));
