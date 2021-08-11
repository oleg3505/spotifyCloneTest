import { types } from 'mobx-state-tree';
import * as SecureStore from 'expo-secure-store';
import Api from '../api';
import { createThunk, model, Model } from 'mst-collection';
import { UserModel } from './UserModel';
import { autorun } from 'mobx';

class Root extends Model({
  user: types.optional(UserModel, {}),
}) {
  bootstrap = createThunk(
    () =>
      async function bootstrapThunk() {
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
  );
}

export const RootModel = model(Root);
