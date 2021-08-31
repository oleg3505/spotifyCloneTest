import { getRoot, types } from 'mobx-state-tree';
import { ListModel, model, createThunk } from 'mst-collection';
import Api from '../../api';
import { CategoriesListCollection } from './CategoriesListCollection';
import { CategoryModel } from './CategoryModel';

class CategoriesList extends ListModel(types.reference(CategoryModel), {
  schema: CategoriesListCollection,
}) {
  fetch = createThunk(
    () =>
      /** @this CategoriesList */
      async function (flow) {
        const res = await Api.Categories.getCategoriesList(
          getRoot(this).viewer.user.id,
        );
        // console.log(res)

        const resalt = this.merge(
          res.data.categories.items,
          CategoriesListCollection,
        );
        // console.log(resalt);
        this.set(result);
      },
  );
}

export const CategoriesListModel = model(CategoriesList);
