import { CollectionModel, model } from 'mst-collection';
import { TrackItemModel } from '../Tracks/TrackItemModel';

class SRCollection extends CollectionModel(TrackItemModel) {}

export const SearchResultCollection = model(SRCollection);
