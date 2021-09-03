import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';

class Image extends Model({
  height: types.maybeNull(types.number),
  width: types.maybeNull(types.number),
  url: types.string,
}) {}

export const ImageModel = model(Image);
