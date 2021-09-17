import { types } from 'mobx-state-tree';
import { model, ListModel, createThunk } from 'mst-collection/src';
import React from 'react';
import Api from '../../api';
import { SearchResultCollectionSchema } from '../schemas';
import { TrackItemModel } from '../Tracks/TrackItemModel';

class SearchResult extends ListModel(types.safeReference(TrackItemModel), {
  idAtribute: 'id',
}) {
  fetch = createThunk(
    (searchInput) =>
      /** @this SearchResult */
      async function (flow) {
        this.set([]);
        const res = await Api.Search.getTracks(searchInput);
        const resData = res.data.tracks.items.map(function (el) {
          return el.album;
        });

        const result = flow.merge(resData, SearchResultCollectionSchema);

        this.set(result.result);
      },
  );
}

export const SearchResultModel = model(SearchResult);
