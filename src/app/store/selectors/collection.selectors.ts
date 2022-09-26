import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCollection from '../reducers';
import { CollectionState } from '../reducers';

export const selectCollectionState = createFeatureSelector<fromCollection.CollectionState>(
  fromCollection.collectionFeatureKey
);

export const selectCollection = createSelector(selectCollectionState, (state: CollectionState) => state.data);

export const selectCollectionIsLoaded = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.isLoaded
);

export const selectCollectionIsLoading = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.isLoading
);
