import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent,
  },
  {
    path: 'object',
    loadChildren: () => import('../../pages/object-card/object-card.module').then((module) => module.ObjectCardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionRoutingModule {}
