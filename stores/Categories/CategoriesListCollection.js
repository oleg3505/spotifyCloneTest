import { CollectionModel, model } from 'mst-collection';
import { CategoriesListModel } from './CategoriesListModel';

class CLCollection extends CollectionModel(CategoriesListModel) {}

export const CategoriesListCollection = model(CLCollection);
