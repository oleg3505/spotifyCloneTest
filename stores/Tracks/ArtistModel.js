import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import React from 'react';

class Artist extends Model({
  //   id: types.identifier,
  name: types.string,
}) {}

export const ArtistModel = model(Artist);
