import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { CategoriesListCollection } from './Categories/CategoriesListCollection';
import { UserCollection } from './Users/UserCollection';

class Entities extends Model({
  user: types.maybeNull(UserCollection),
  categories: types.maybeNull(CategoriesListCollection),
}) {}

export const EntitiesModel = model(Entities);
