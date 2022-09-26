import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';
import { GetYearPipe } from 'src/app/pipes/get-year.pipe';
import { GetPlacesPipe } from 'src/app/pipes/get-places.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MaterialModule } from 'src/material.module';
import { HeaderFormModule } from 'src/app/components/header-form/header-form.module';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    MatPaginatorModule,
    MaterialModule,
    CustomPipesModule,
    HeaderFormModule,
  ],
})
export class CollectionModule {}
