import { types } from 'mobx-state-tree';

export const ExternalUrlModel = types.model('ExtrnalUrlModel', {
  spotify: types.string,
});
