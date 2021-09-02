import { types } from 'mobx-state-tree';
import { Model, model } from 'mst-collection';
import React from 'react';
import { ImageModel } from '../PLayList/ImageModel';
import { ArtistModel } from './ArtistModel';

class TrackItem extends Model({
  id: types.identifier,
  images: types.array(ImageModel),
  name: types.string,
  artists: types.array(ArtistModel),
}) {}

export const TrackItemModel = model(TrackItem);
