import { RootModel } from './RootModel';
import { createContext } from 'react';
import { useContext } from 'react';

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
