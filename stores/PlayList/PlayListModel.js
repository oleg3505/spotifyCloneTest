import { types } from 'mobx-state-tree';
import { Model, model } from 'mst-collection';
import { TrackItemsListModel } from '../Tracks/TrackItemsListModel';
import { ExternalUrlModel } from '../Users/ExternalUrlModel';
import { UserModel } from '../Users/UserModel';
import { ImageModel } from './ImageModel';
import { TrackModel } from './TrackModel';

class Playlist extends Model({
  collaborative: types.boolean,
  //   external_urls: types.optional(ExternalUrlModel, {}),
  //   href: types.string,
  id: types.identifier,
  images: types.array(ImageModel),
  name: types.string,
  //   owner: types.optional(UserModel, {}),
  //   public: types.boolean,
  //   snapshot_id: types.string,
  //   tracks: types.optional(TrackModel, {}),
  //   type: types.string,
  //   uri: types.string,
  description: types.string,
  trackItems: types.optional(TrackItemsListModel, {}),
}) {}

export const PlaylistModel = model(Playlist);
