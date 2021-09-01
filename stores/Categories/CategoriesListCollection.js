import { CollectionModel, model } from 'mst-collection';
import { CategoriesListModel } from './CategoriesListModel';
import { CategoryModel } from './CategoryModel';

class CLCollection extends CollectionModel(CategoryModel) {}

export const CategoriesListCollection = model(CLCollection);
