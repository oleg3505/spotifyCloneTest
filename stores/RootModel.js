import { types } from 'mobx-state-tree';

import { model, Model, createThunk } from 'mst-collection';

import { AuthModel } from './Users/Auth/AuthModel';

import { EntitiesModel } from './EntitiesModel';
import { ViewerModel } from './Users/ViewerModel';
import Api from '../api';
import { CategoriesListCollection } from './Categories/CategoriesListCollection';
import { CategoriesModel } from './Categories/CategoriesModel';

class Root extends Model({
  viewer: types.optional(ViewerModel, {}),
  auth: types.optional(AuthModel, {}),
  categories: types.optional(CategoriesModel, {}),
  entities: types.optional(EntitiesModel, {}),
}) {
  setCategories(data) {
    this.categories = data;
  }

  getCategories = createThunk(
    () =>
      async function (flow) {
        try {
          const resId = await Api.Viewer.getViewer();
          const id = resId.data.id;
          const res = await Api.Categories.getCategoriesList(id);
          console.log(res.data);
          const resalt = flow.merge(res.data, CategoriesListCollection);
          this.setCategories(resalt);
        } catch (err) {
          console.log(err);
        }
      },
  );
}

export const RootModel = model(Root);
