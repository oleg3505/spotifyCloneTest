import { model, EntitiesModel } from 'mst-collection';
import { CategoriesListCollection } from './Categories/CategoriesListCollection';
import { PlayListsCollection } from './PLayList/PlayListsCollection';
import { SearchResultCollection } from './Search/SearchResultCollection';
import { TrackItemsListCollection } from './Tracks/TrackItemsListCollection';
import { UserCollection } from './Users/UserCollection';

class RootEntities extends EntitiesModel({
  user: UserCollection,
  categories: CategoriesListCollection,
  playlists: PlayListsCollection,
  trackItems: TrackItemsListCollection,
  search: SearchResultCollection,
}) {}

export const RootEntitiesModel = model(RootEntities);
