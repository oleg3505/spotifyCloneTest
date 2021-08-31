import { schema } from 'normalizr';

export const User = new schema.Entity('user');
export const UserCollectionSchema = [User];
export const CategoriesList = new schema.Entity('categories');
