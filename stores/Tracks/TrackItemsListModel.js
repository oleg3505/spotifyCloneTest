import { types } from 'mobx-state-tree';
import { createThunk, ListModel, model } from 'mst-collection';
import React from 'react';
import Api from '../../api';
import { TrackItemsCollectionSchema } from '../schemas';
import { TrackItemModel } from './TrackItemModel';

class TrackItemsList extends ListModel(types.safeReference(TrackItemModel), {
  idAttribute: 'id',
}) {
  fetch = createThunk(
    (playlistId) =>
      /** @this TrackItemsList */
      async function (flow) {
        const res = await Api.PlayLists.getTracksFromPlayList(playlistId);
        const resData = res.data.items.map(function (el) {
          return el.track.album;
        });
        const result = flow.merge(resData, TrackItemsCollectionSchema);
        this.set(result.result);
      },
  );
}

export const TrackItemsListModel = model(TrackItemsList);
