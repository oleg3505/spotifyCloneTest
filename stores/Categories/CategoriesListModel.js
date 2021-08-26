import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { CategoryModel } from './CategoryModel';

class CategoriesList extends Model({
  href: types.string,
  items: types.array(CategoryModel),
  limit: types.number,
  next: types.string,
  offset: types.number,
  previos: types.maybeNull(types.string),
  total: types.number,
}) {}

export const CategoriesListModel = model(CategoriesList);
