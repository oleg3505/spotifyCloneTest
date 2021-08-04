import { types } from 'mobx-state-tree';
import { asyncModel } from '../utils';
import { UserModel } from './UserModel';
import Api from '../../api';

export const ViewerStore = types
  .model('ViewerStore', {
    user: types.maybe(types.safeReference(UserModel)),
    userModel: types.maybe(types.safeReference(UserModel)),
    fetchUser: asyncModel(fetchUser),
  })
  .actions((store) => ({
    setViewer(user) {
      store.userModel = user;
    },
  }));

function fetchUser() {
  return async function fetchUserFlow(flow, store) {
    const res = await Api.Viewer.getViewer;
    console.log(res.data);
  };
}
