import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectCardComponent } from './object-card.component';

const routes: Routes = [{ path: '', component: ObjectCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectCardRoutingModule {}
