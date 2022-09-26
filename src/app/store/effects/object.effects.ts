import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ObjectActions from '../actions/object.actions';
import { CollectionService } from 'src/app/services/collection.service';

@Injectable()
export class ObjectEffects {
  constructor(private actions$: Actions, private collectionService: CollectionService) {}

  loadDetailedObject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ObjectActions.loadDetailedObject),
      concatMap((payload) => {
        return this.collectionService.getDetailedObject(payload.objectNumber).pipe(
          map((detailedObject) => ObjectActions.loadDetailedObjectSuccess({ detailedObject })),
          catchError((error) => of(ObjectActions.loadDetailedObjectFailure({ error })))
        );
      })
    );
  });

  loadObjectTiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ObjectActions.loadObjectTiles),
      concatMap((payload) =>
        this.collectionService.getObjectTiles(payload.objectNumber).pipe(
          map((objectTiles) => ObjectActions.loadObjectTilesSuccess({ objectTiles })),
          catchError((error) => of(ObjectActions.loadObjectTilesFailure({ error })))
        )
      )
    );
  });
}
