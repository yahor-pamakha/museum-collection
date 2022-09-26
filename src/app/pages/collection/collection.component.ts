import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Collection, CollectionApiParams, SORT_KEY_ENUM } from 'src/app/models/collection.model';
import * as fromStore from '../../store';
import { PageEvent } from '@angular/material/paginator';
import { GenericHooks } from 'src/app/util/generic-hooks';
import { COLLECTION_SORT_OPTIONS } from 'src/app/constants/collection.const';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent extends GenericHooks implements OnInit {
  collection: Collection;

  collectionSortOptions = COLLECTION_SORT_OPTIONS;
  searchDisabled = false;

  collectionLength = 10000;
  pageSizeOptions = [10, 20, 50, 100];
  paginationDisabled = false;
  collectionAPIParams: CollectionApiParams = {
    pageNumber: 1,
    pageSize: 10,
    searchKey: '',
  };

  constructor(private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(fromStore.loadCollection(this.collectionAPIParams));

    this.subscriptions.push(
      this.store
        .select(fromStore.selectCollection)
        .pipe(filter((collection) => !!collection))
        .subscribe((collection) => {
          this.collection = collection;
        }),
      this.store.select(fromStore.selectCollectionIsLoaded).subscribe((isLoaded) => {
        this.paginationDisabled = this.searchDisabled = !isLoaded;
      })
    );
  }

  onPageChange(event: PageEvent) {
    this.collectionAPIParams = {
      ...this.collectionAPIParams,
      pageNumber: event.pageIndex + 1,
      pageSize: event.pageSize,
    };
    this.store.dispatch(fromStore.loadCollection(this.collectionAPIParams));
  }

  onSearchSubmit(searchKey: string) {
    this.collectionAPIParams = {
      ...this.collectionAPIParams,
      searchKey,
      sortKey: null
    };
    this.store.dispatch(fromStore.loadCollection(this.collectionAPIParams));
  }

  onSortSubmit(sortKey: SORT_KEY_ENUM) {
    this.collectionAPIParams = {
      ...this.collectionAPIParams,
      searchKey: '',
      sortKey,
    };
    this.store.dispatch(fromStore.loadCollection(this.collectionAPIParams));
  }
}
