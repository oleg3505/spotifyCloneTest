import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection/src';
import React from 'react';
import { TrackItemModel } from './Tracks/TrackItemModel';

class Player extends Model({
  isPlaying: false,
  playerItem: types.safeReference(TrackItemModel),
}) {
  setPlayerItem(item) {
    this.playerItem = item;
  }

  setIsPlaying(data) {
    this.isPlaying = data;
  }
}

export const PlayerModel = model(Player);
