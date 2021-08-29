import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { CategoriesListModel } from './CategoriesListModel';

class Categories extends Model({
  categories: types.maybe(CategoriesListModel),
}) {}

export const CategoriesModel = model(Categories);
