import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { ExternalUrlModel } from './ExternalUrlModel';
import { FollowersModel } from './FollowersModel';
import { ImageModel } from './ImageModel';

class User extends Model({
  country: types.maybe(types.string),
  display_name: types.maybe(types.string),
  email: types.maybe(types.string),
  href: types.maybe(types.string),
  id: types.maybe(types.string),
  product: types.maybe(types.string),
  type: types.maybe(types.string),
  uri: types.maybe(types.string),
  external_urls: types.maybeNull(ExternalUrlModel),
  followers: types.maybeNull(FollowersModel),
  images: types.array(ImageModel),
}) {}

export const UserModel = model(User);
