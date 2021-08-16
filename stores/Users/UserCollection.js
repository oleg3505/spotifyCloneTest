import { model, Model } from 'mst-collection';
import { asyncModel } from 'mst-collection/dist/createThunk';
import Api from '../../api';
import { User } from '../schemas';

class Collection extends Model({
  getUser: asyncModel(getUser),
}) {}
function getUser() {
  return async function getUserFlow(flow, store, Root) {
    const res = await Api.Viewer.getViewer();
    console.log(res.data);

    flow.merge(res.data, User);
  };
}

export const UserCollection = model(Collection);
