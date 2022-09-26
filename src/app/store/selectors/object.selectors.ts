import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromObject from '../reducers';

export const selectObjectState = createFeatureSelector<fromObject.ObjectState>(fromObject.objectFeatureKey);

export const selectObject = createSelector(selectObjectState, (state: fromObject.ObjectState) => state.object);

export const selectObjectTiles = createSelector(
  selectObjectState,
  (state: fromObject.ObjectState) => state.objectTiles
);

export const selectObjectIsLoaded = createSelector(
  selectObjectState,
  (state: fromObject.ObjectState) => state.isLoaded
);

export const selectObjectIsLoading = createSelector(
  selectObjectState,
  (state: fromObject.ObjectState) => state.isLoading
);
