import { types } from 'mobx-state-tree';
import { Model, model } from 'mst-collection';

class Explicit extends Model({
  filtre_enabled: types.boolean,
  filter_locked: types.boolean,
}) {}

export const ExplicitContent = model(Explicit);
