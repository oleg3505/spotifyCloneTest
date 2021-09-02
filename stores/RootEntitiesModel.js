import { model, EntitiesModel } from 'mst-collection';
import { CategoriesListCollection } from './Categories/CategoriesListCollection';
import { PlayListsCollection } from './PLayList/PlayListsCollection';
import { UserCollection } from './Users/UserCollection';

class RootEntities extends EntitiesModel({
  user: UserCollection,
  categories: CategoriesListCollection,
  playlists: PlayListsCollection,
}) {}

export const RootEntitiesModel = model(RootEntities);
