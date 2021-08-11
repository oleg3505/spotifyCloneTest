import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';

class Followers extends Model({
  href: types.string,
  total: types.number,
}) {}

export const FollowersModel = model(Followers);
