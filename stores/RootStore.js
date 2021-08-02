import { types } from 'mobx-state-tree';
import * as SecureStore from 'expo-secure-store';

import Api from '../api';
import { UserModel } from './Users/UserModel';

export const RootStore = types
  .model('RootStore', {
    // user: types.optional(UserModel, {}),
  })
  .actions((store) => ({
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
