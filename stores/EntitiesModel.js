import { types } from 'mobx-state-tree';
import { model, Model } from 'mst-collection';
import { UserCollection } from './Users/UserCollection';

class Entities extends Model({
  user: types.maybeNull(UserCollection),
}) {}

export const EntitiesModel = model(Entities);
