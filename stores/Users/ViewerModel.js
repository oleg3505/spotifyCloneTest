import { types } from 'mobx-state-tree';

import { createThunk, model, Model } from 'mst-collection';
import { asyncModel } from 'mst-collection/src/createThunk';
import Api from '../../api';
import { UserCollection } from './UserCollection';
import { UserModel } from './UserModel';

class Viewer extends Model({
  user: types.maybe(types.safeReference(UserModel)),
}) {
  setUser(data) {
    this.user = data;
  }
  // getUser = createThunk(
  //   () =>
  //     async function (flow) {
  //       try {
  //         const res = await Api.Viewer.getViewer();
  //         console.log(res.data)
  //         const resalt = flow.merge(res.data, UserCollection);
  //         this.setUser(result);
  //         console.log(resalt);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  // );
}

export const ViewerModel = model(Viewer);
