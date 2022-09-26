import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as fromStore from '../../store';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { OBJECT_IMAGE_ZOOM_BUTTONS } from 'src/app/constants/object.const';

@Component({
  selector: 'app-object-card',
  templateUrl: './object-card.component.html',
  styleUrls: ['./object-card.component.scss'],
})
export class ObjectCardComponent implements OnInit {
  object: any;
  objectNumber = '';
  objectTiles: any;
  tilesMap: any;
  imageHeight: number;
  imageWidth: number;
  scrollContainerHeight: number;
  scrollContainerWidth: number;
  tags = [];
  isLoaded = false;
  zoomButtons = OBJECT_IMAGE_ZOOM_BUTTONS;

  heightZoomCount = 4;
  widthZoomCount = 4;
  imageWrapperDisplay = 'flex';

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.route.queryParams.subscribe((params) => {
      this.objectNumber = params['id'];
    });

    this.store.dispatch(fromStore.loadDetailedObject({ objectNumber: this.objectNumber }));
    this.store.dispatch(fromStore.loadObjectTiles({ objectNumber: this.objectNumber }));

    this.store
      .select(fromStore.selectObject)
      .pipe(filter((object) => !!object))
      .subscribe((object) => {
        this.object = object;
        if (this.object) {
          this.tags = [...this.object.artObject.materials, ...this.object.artObject.techniques];
        }
      });

    this.store
      .select(fromStore.selectObjectTiles)
      .pipe(filter((objectTiles) => !!objectTiles))
      .subscribe((objectTiles) => {
        this.objectTiles = objectTiles;
        if (this.objectTiles) {
          this.tilesMap = this.objectTiles?.levels.reduce((acc, item) => {
            acc[item.name] = item;
            return acc;
          }, {});

          this.imageHeight = this.tilesMap[`z${this.heightZoomCount}`].height;
          this.imageWidth = this.tilesMap[`z${this.widthZoomCount}`].width;
        }
      });

    this.store.select(fromStore.selectObjectIsLoaded).subscribe((isLoaded) => {
      this.isLoaded = isLoaded;
    });
  }

  onZoomButtonClick(button: string) {
    switch (button) {
      case 'zoom-in':
        if (this.heightZoomCount !== 1) {
          this.imageWrapperDisplay = 'block';
          this.imageHeight = this.tilesMap[`z${--this.heightZoomCount}`].height;
          this.imageWidth = this.tilesMap[`z${--this.widthZoomCount}`].width;
        };
        break;
      case 'zoom-out':
        if (this.heightZoomCount !== 4) {
          this.imageHeight = this.tilesMap[`z${++this.heightZoomCount}`].height;
          this.imageWidth = this.tilesMap[`z${++this.widthZoomCount}`].width;
        } 
        
        if (this.heightZoomCount === 4) {
          this.imageWrapperDisplay = 'flex';
        }
        break;
    }
  }

  getButtonDisabled(button) {
    let result;
    
    switch (button) {
      case 'zoom-in':
        result = this.heightZoomCount === 1;
        break;
      case 'zoom-out':
        result = this.heightZoomCount === 4;
        break;
    }

    return result;
  }
}
