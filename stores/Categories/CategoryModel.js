import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { IconModel } from './IconModel';

class Category extends Model({
  href: types.string,
  icons: types.array(IconModel),
  id: types.identifier,
  name: types.string,
}) {}

export const CategoryModel = model(Category);
