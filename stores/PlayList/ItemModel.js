import { types } from 'mobx-state-tree';
import { ExternalUrlModel } from '../Users/ExternalUrlModel';
import { ImageMogel } from '../Users/ImageModel';
import { UserModel } from '../Users/UserModel';
import { TrackModel } from './TrackModel';

export const ItemModel = types.model('ItemModel', {
  collaborative: types.boolean,
  external_urls: types.optional(ExternalUrlModel, {}),
  href: types.string,
  id: types.string,
  images: types.array(ImageMogel),
  name: types.string,
  owner: types.optional(UserModel, {}),
  public: types.boolean,
  snapshot_id: types.string,
  tracks: types.optional(TrackModel, {}),
  type: types.string,
  uri: types.string,
});
