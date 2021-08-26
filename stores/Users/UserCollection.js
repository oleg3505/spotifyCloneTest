import { createThunk, model, Model } from 'mst-collection';

class UCollection extends Model({}) {}

export const UserCollection = model(UCollection);
