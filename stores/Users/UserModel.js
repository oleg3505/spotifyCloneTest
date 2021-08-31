import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { ExplicitContent } from './ExplicitContent';
import { ExternalUrlModel } from './ExternalUrlModel';
import { FollowersModel } from './FollowersModel';
import { ImageModel } from './ImageModel';

class User extends Model({
  // country: types.string,
  display_name: types.string,
  email: types.string,
  href: types.string,
  id: types.identifier,
  product: types.string,
  type: types.string,
  uri: types.string,
  // external_urls: types.maybeNull(ExternalUrlModel),
  // followers: types.maybeNull(FollowersModel),
  images: types.array(ImageModel),
  // explicit_content: types.maybeNull(ExplicitContent),
}) {}

export const UserModel = model(User);
