import { types } from 'mobx-state-tree';
import { createThunk, model, Model } from 'mst-collection';
import { PlayListsModel } from '../PLayList/PlayListsModel';
import { IconModel } from './IconModel';

class Category extends Model({
  href: types.string,
  icons: types.array(IconModel),
  id: types.identifier,
  name: types.string,
  playlists: types.optional(PlayListsModel, {}),
}) {}

export const CategoryModel = model(Category);
