import { createContext, useContext } from 'react';
import { RootModel } from './RootModel';

export function createStore() {
  const root = RootModel.create();

  return root;
}

const MSTContext = createContext(null);

export const Provider = MSTContext.Provider;

export function useStore(mapStateToProps) {
  const store = useContext(MSTContext);
  if (mapStateToProps === 'function') {
    return mapStateToProps(store);
  }
  return store;
}
