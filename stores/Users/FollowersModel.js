import { types } from 'mobx-state-tree';

export const FollowersModel = types.model('FollowersModel', {
  href: types.string,
  total: types.number,
});
