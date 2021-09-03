import { schema } from 'normalizr';

export const UserSchema = new schema.Entity('user');
export const UserCollectionSchema = [UserSchema];
export const CategorySchema = new schema.Entity('categories');
export const CategoryCollectionSchema = [CategorySchema];
