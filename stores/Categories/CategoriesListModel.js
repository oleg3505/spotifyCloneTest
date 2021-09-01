import { getRoot, types } from 'mobx-state-tree';
import { ListModel, model, createThunk } from 'mst-collection';
import Api from '../../api';
import { CategoryCollectionSchema } from '../schemas';
import { CategoriesListCollection } from './CategoriesListCollection';
import { CategoryModel } from './CategoryModel';

class CategoriesList extends ListModel(types.safeReference(CategoryModel), {
  idAttribute: 'id',
}) {
  fetch = createThunk(
    () =>
      /** @this CategoriesList */
      async function (flow) {
        const res = await Api.Categories.getCategoriesList(
          getRoot(this).viewer.user.id,
        );
        const result = flow.merge(
          res.data.categories.items,
          CategoryCollectionSchema,
        );
        this.set(result.result);
      },
  );
}

export const CategoriesListModel = model(CategoriesList);
