import { types } from 'mobx-state-tree';
import { ItemModel } from './ItemModel';

export const PlayListModel = types.model('PlayListModel', {
  href: types.string,
  items: types.array(ItemModel),
  limit: types.number,
  next: types.null,
  offset: types.number,
  previos: types.null,
  total: types.number,
});
