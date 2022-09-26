import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CollectionActions from '../actions/collection.actions';
import { CollectionService } from 'src/app/services/collection.service';

@Injectable()
export class CollectionEffects {
  constructor(private actions$: Actions, private collectionService: CollectionService) {}

  loadCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CollectionActions.loadCollection),
      concatMap((payload) =>
        this.collectionService.getCollection(payload).pipe(
          map((collection) => CollectionActions.loadCollectionSuccess({ collection })),
          catchError((error) => of(CollectionActions.loadCollectionFailure({ error })))
        )
      )
    );
  });
}
