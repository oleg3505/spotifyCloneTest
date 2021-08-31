import { types } from 'mobx-state-tree';
import { model, Model, createThunk } from 'mst-collection';
import { AuthModel } from './Users/Auth/AuthModel';
import { RootEntitiesModel } from './RootEntitiesModel';
import { ViewerModel } from './Users/ViewerModel';
import Api from '../api';
import { CategoriesListModel } from './Categories/CategoriesListModel';
import { UserCollection } from './Users/UserCollection';
import { User, UserCollectionSchema } from './schemas';

class Root extends Model({
  viewer: types.optional(ViewerModel, {}),
  auth: types.optional(AuthModel, {}),
  categories: types.optional(CategoriesListModel, {}),
  entities: types.optional(RootEntitiesModel, {}),
}) {
  bootstrap = createThunk(
    () =>
      /** @this Root */
      async function (flow) {
        try {
          const res = await Api.Viewer.getViewer();
          console.log(res.data);
          const resalt = flow.merge([res.data], UserCollectionSchema);
          console.log(this.entities.user.collection);
        } catch (err) {
          console.log(err);
        }
      },
  );
}

export const RootModel = model(Root);
