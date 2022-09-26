import { NgModule } from '@angular/core';
import { ObjectCardComponent } from './object-card.component';
import { ObjectCardRoutingModule } from './object-card-routing.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/material.module';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';

@NgModule({
  declarations: [ObjectCardComponent],
  imports: [ObjectCardRoutingModule, CommonModule, MatIconModule, MaterialModule, DragScrollModule, CustomPipesModule],
})
export class ObjectCardModule {}
