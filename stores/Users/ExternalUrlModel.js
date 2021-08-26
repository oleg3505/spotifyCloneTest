import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';

class ExternalUrl extends Model({
  spotify: types.string,
}) {}

export const ExternalUrlModel = model(ExternalUrl);
