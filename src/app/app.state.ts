import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromStrore from './store';

export interface AppState {
  collection: fromStrore.CollectionState;
  object: fromStrore.ObjectState;
}

export const reducers: ActionReducerMap<AppState> = {
  collection: fromStrore.collectionReducer,
  object: fromStrore.objectReducer,
};

export const metaReducers: Array<MetaReducer<any>> = [];
