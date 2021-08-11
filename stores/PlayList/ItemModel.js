import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { ExternalUrlModel } from '../Users/ExternalUrlModel';
import { ImageMogel } from '../Users/ImageModel';
import { UserModel } from '../Users/UserModel';
import { TrackModel } from './TrackModel';

class Item extends Model({
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
}) {}

export const ItemModel = model(Item);
