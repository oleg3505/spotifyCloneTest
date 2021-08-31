import { getRoot, types } from 'mobx-state-tree';

import { createThunk, model, Model } from 'mst-collection';
import { asyncModel } from 'mst-collection/src/createThunk';
import Api from '../../api';
import { UserCollection } from './UserCollection';
import { UserModel } from './UserModel';

class Viewer extends Model({
  user: types.safeReference(UserModel),
}) {
  setUser(data) {
    this.user = data;
  }
}

export const ViewerModel = model(Viewer);
