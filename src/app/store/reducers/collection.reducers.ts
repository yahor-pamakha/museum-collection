import { createReducer, on } from '@ngrx/store';
import { Collection } from 'src/app/models/collection.model';
import * as CollectionActions from '../actions/collection.actions';

export const collectionFeatureKey = 'collection';

export interface CollectionState {
  data: Collection;
  isLoading: boolean;
  isLoaded: boolean;
}

const initialState: CollectionState = {
  data: {
    artObjects: [],
    count: 0,
    countFacets: {
      hasimage: 0,
      ondisplay: 0,
    },
    elapsedMilliseconds: 0,
  },
  isLoading: false,
  isLoaded: false,
};

export const collectionReducer = createReducer(
  initialState,

  on(CollectionActions.loadCollection, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(CollectionActions.loadCollectionSuccess, (state, action) => ({
    ...state,
    data: action.collection,
    isLoading: false,
    isLoaded: true,
  })),
  on(CollectionActions.loadCollectionFailure, (state) => state)
);
