import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { AppState } from 'src/app/app.state';
import { GenericHooks } from 'src/app/util/generic-hooks';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent extends GenericHooks implements OnInit {
  objectIsLoading = false;
  collectionIsLoading = false;
  isLoading = false;
  routerUrl: string;

  constructor(private store: Store<AppState>, private cdr: ChangeDetectorRef, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.routerUrl = this.router.url;
    this.subscriptions.push(
      this.store
        .select(fromStore.selectObjectIsLoading)
        .pipe(filter((isLoading) => this.filterUndefined(isLoading)))
        .subscribe((isLoading) => {
          this.objectIsLoading = isLoading;
          this.syncIsLoading();
        }),
      this.store
        .select(fromStore.selectCollectionIsLoading)
        .pipe(filter((isLoading) => this.filterUndefined(isLoading)))
        .subscribe((isLoading) => {
          this.collectionIsLoading = isLoading;
          this.syncIsLoading();
        })
    );
  }

  syncIsLoading() {
    this.isLoading = this.objectIsLoading || this.collectionIsLoading;
    this.cdr.detectChanges();
  }

  filterUndefined(value: boolean) {
    return typeof value !== 'undefined';
  }
}
