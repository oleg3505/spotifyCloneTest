import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { ItemModel } from './ItemModel';

class PlayList extends Model({
  href: types.string,
  items: types.array(ItemModel),
  limit: types.number,
  next: types.null,
  offset: types.number,
  previos: types.null,
  total: types.number,
}) {}

export const PlayListModel = model(PlayList);
