import { types } from 'mobx-state-tree';
import { ExternalUrlModel } from './ExternalUrlModel';
import { FollowersModel } from './FollowersModel';
import { ImageMogel } from './ImageModel';

export const UserModel = types.model('UserModel', {
  country: types.string,
  display_name: types.string,
  email: types.string,
  href: types.string,
  id: types.string,
  product: types.string,
  type: types.string,
  uri: types.string,
  external_urls: types.maybeNull(ExternalUrlModel),
  followers: types.maybeNull(FollowersModel),
  images: types.array(ImageMogel),
});
