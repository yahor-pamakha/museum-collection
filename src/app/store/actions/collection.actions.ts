import { createAction, props } from '@ngrx/store';
import { Collection } from 'src/app/models/collection.model';

export const loadCollection = createAction(
  '[Collection] Load Collection',
  props<{
    pageNumber?: number;
    pageSize?: number;
    searchKey?: string;
    sortKey?: string;
  }>()
);

export const loadCollectionSuccess = createAction(
  '[Collection] Load Collection Success',
  props<{ collection: Collection }>()
);

export const loadCollectionFailure = createAction('[Collection] Load Collection Failure', props<{ error: any }>());
