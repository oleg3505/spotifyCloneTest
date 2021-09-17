import { types } from 'mobx-state-tree';
import { model, Model, createThunk } from 'mst-collection';
import { AuthModel } from './Users/Auth/AuthModel';
import { RootEntitiesModel } from './RootEntitiesModel';
import { ViewerModel } from './Users/ViewerModel';
import Api from '../api';
import { CategoriesListModel } from './Categories/CategoriesListModel';
import { UserCollection } from './Users/UserCollection';
import { UserSchema } from './schemas';
import { PlayerModel } from './PlayerModel';
import { SearchResultModel } from './Search/SearchResultModel';

class Root extends Model({
  viewer: types.optional(ViewerModel, {}),
  auth: types.optional(AuthModel, {}),
  categories: types.optional(CategoriesListModel, {}),
  entities: types.optional(RootEntitiesModel, {}),
  player: types.optional(PlayerModel, {}),
  search: types.optional(SearchResultModel, {}),
}) {
  bootstrap = createThunk(
    () =>
      /** @this Root */
      async function (flow) {
        try {
          const res = await Api.Viewer.getViewer();
          const result = flow.merge(res.data, UserSchema);

          this.viewer.setUser(result.result);
        } catch (err) {
          console.log(err);
        }
      },
  );
}

export const RootModel = model(Root);
