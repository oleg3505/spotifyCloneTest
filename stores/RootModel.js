import { types } from 'mobx-state-tree';

import { model, Model } from 'mst-collection';

import { AuthModel } from './Users/Auth/AuthModel';

import { EntitiesModel } from './EntitiesModel';
import { ViewerModel } from './Users/ViewerModel';
import { CategoriesListModel } from './Categories/CategoriesListModel';

class Root extends Model({
  viewer: types.optional(ViewerModel, {}),
  auth: types.optional(AuthModel, {}),
  categories: types.optional(CategoriesListModel, {}),
  entities: types.optional(EntitiesModel, {}),
}) {}

export const RootModel = model(Root);
