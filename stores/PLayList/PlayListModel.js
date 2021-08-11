import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { ItemModel } from './ItemModel';

class PlayList extends Model({
  href: types.string,
  items: types.array(ItemModel),
  limit: types.number,
  next: types.maybeNull(types.string),
  offset: types.number,
  previos: types.maybeNull(types.string),
  total: types.number,
}) {}

export const PlayListModel = model(PlayList);
