import { types } from 'mobx-state-tree';

export const TrackModel = types.model('TrackModel', {
  href: types.string,
  total: types.number,
});
