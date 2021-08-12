import { types } from 'mobx-state-tree';
import * as SecureStore from 'expo-secure-store';
import Api from '../api';
import { createThunk, model, Model } from 'mst-collection';

import { autorun } from 'mobx';
import { UserModel } from './Users/UserModel';
import { AuthModel } from './Users/Auth/AuthModel';

class Root extends Model({
  viewer: types.maybe(UserModel),
  auth: types.optional(AuthModel, {}),
}) {}

export const RootModel = model(Root);
