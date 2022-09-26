import { NgModule } from '@angular/core';
import { GetPlacesPipe } from './get-places.pipe';
import { GetYearPipe } from './get-year.pipe';

@NgModule({
  declarations: [GetPlacesPipe, GetYearPipe],
  exports: [GetPlacesPipe, GetYearPipe],
})
export class CustomPipesModule {}
