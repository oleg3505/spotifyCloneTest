import { CollectionModel, model } from 'mst-collection';
import { PlaylistModel } from './PlaylistModel';
import { PlayListsModel } from './PlayListsModel';

class PLCollection extends CollectionModel(PlaylistModel) {}

export const PlayListsCollection = model(PLCollection);
