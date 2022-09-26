import { createReducer, on } from '@ngrx/store';
import { Collection } from 'src/app/models/collection.model';
import * as ObjectActions from '../actions/object.actions';

export const objectFeatureKey = 'object';

export interface ObjectState {
  object: any;
  objectTiles: any;
  isLoading: boolean;
  isLoaded: boolean;
}

const initialState: ObjectState = {
  object: null,
  objectTiles: null,
  isLoading: false,
  isLoaded: false,
};

export const objectReducer = createReducer(
  initialState,
  on(ObjectActions.loadDetailedObject, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(ObjectActions.loadDetailedObjectSuccess, (state, action) => ({
    ...state,
    object: action.detailedObject,
    isLoading: false,
    isLoaded: true,
  })),
  on(ObjectActions.loadDetailedObjectFailure, (state) => state),
  on(ObjectActions.loadObjectTiles, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(ObjectActions.loadObjectTilesSuccess, (state, action) => ({
    ...state,
    objectTiles: action.objectTiles,
    isLoading: false,
    isLoaded: true,
  })),
  on(ObjectActions.loadObjectTilesFailure, (state) => state)
);
