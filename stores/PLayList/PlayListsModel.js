import { getRoot, types } from 'mobx-state-tree';
import { ListModel, model, createThunk } from 'mst-collection';
import Api from '../../api';
import { PlayListsCollectionSchema } from '../schemas';
import { PlaylistModel } from './PlaylistModel';

class PlayLists extends ListModel(types.safeReference(PlaylistModel), {
  idAttribute: 'id',
}) {
  fetch = createThunk(
    (playlistId) =>
      /** @this PlayLists */
      async function (flow) {
        const res = await Api.Categories.getCategoryPlayLists(playlistId);

        const result = flow.merge(
          res.data.playlists.items,
          PlayListsCollectionSchema,
        );

        this.set(result.result);
        console.log(this.asArray);
      },
  );
}

export const PlayListsModel = model(PlayLists);
