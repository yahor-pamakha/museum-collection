import { createAction, props } from '@ngrx/store';

export const loadDetailedObject = createAction(
  '[Object] Load Detailed Object',
  props<{ objectNumber: string | number }>()
);

export const loadDetailedObjectSuccess = createAction(
  '[Object] Load Detailed Object Success',
  props<{ detailedObject: any }>() // create interface
);

export const loadDetailedObjectFailure = createAction('[Object] Load Detailed Object Failure', props<{ error: any }>());

export const loadObjectTiles = createAction('[Object] Load Object Tiles', props<{ objectNumber: string | number }>());

export const loadObjectTilesSuccess = createAction(
  '[Object] Load Object Tiles Success',
  props<{ objectTiles: any }>() // create interface
);

export const loadObjectTilesFailure = createAction('[Object] Load Object Tiles Failure', props<{ error: any }>());
