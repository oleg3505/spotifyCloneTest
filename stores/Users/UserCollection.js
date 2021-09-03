import { createThunk, model, CollectionModel } from 'mst-collection';
import { UserModel } from './UserModel';

class UCollection extends CollectionModel(UserModel) {}

export const UserCollection = model(UCollection);
