import { types } from 'mobx-state-tree';
import { model, EntitiesModel } from 'mst-collection';
import { CategoriesListCollection } from './Categories/CategoriesListCollection';
import { UserCollection } from './Users/UserCollection';

class RootEntities extends EntitiesModel({
  user: UserCollection,
  categories: CategoriesListCollection,
}) {}

export const RootEntitiesModel = model(RootEntities);
