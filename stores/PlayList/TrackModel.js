import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';

class Track extends Model({
  href: types.string,
  total: types.number,
}) {}

export const TrackModel = model(Track);
