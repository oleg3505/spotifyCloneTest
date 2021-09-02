import { CollectionModel, model } from 'mst-collection';
import React from 'react';
import { TrackItemModel } from './TrackItemModel';

class TILCollection extends CollectionModel(TrackItemModel) {}

export const TrackItemsListCollection = model(TILCollection);
