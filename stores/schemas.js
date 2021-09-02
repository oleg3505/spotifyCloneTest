import { schema } from 'normalizr';

export const UserSchema = new schema.Entity('user');
export const UserCollectionSchema = [UserSchema];
export const CategorySchema = new schema.Entity('categories');
export const CategoryCollectionSchema = [CategorySchema];
export const PlaylistSchema = new schema.Entity('playlists');
export const PlayListsCollectionSchema = [PlaylistSchema];
export const TrackItemSchema = new schema.Entity('trackItems');
export const TrackItemsCollectionSchema = [TrackItemSchema];
