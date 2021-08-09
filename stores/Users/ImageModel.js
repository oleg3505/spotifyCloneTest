import { types } from 'mobx-state-tree';

export const ImageMogel = types.model('ImageModel', {
  height: types.maybeNull(types.number),
  width: types.maybeNull(types.number),
  url: types.string,
});
