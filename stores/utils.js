import {
  applySnapshot,
  flow,
  getParent,
  getRoot,
  onSnapshot,
  types,
} from 'mobx-state-tree';

import * as SecureStore from 'expo-secure-store';

export function asyncModel(thunk) {
  const model = types
    .model('AsyncModel', {
      isLoading: false,
      isError: false,
    })
    .actions((store) => ({
      start() {
        store.isLoading = true;
        store.isError = false;
      },

      success() {
        store.isLoading = false;
      },

      error() {
        store.isLoading = false;
        store.isError = true;
      },

      run(...arg) {
        const promise = thunk(...arg)(store, getParent(store), getRoot(store));
        return promise;
      },

      merge(data, scheme) {
        const { result, entities } = normalize(data, scheme);

        getRoot(store).entities.merge(entities);

        return result;
      },
    }));
  return types.optional(model, {});
}
