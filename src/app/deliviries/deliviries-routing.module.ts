import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliviriesPage } from './deliviries.page';

const routes: Routes = [
  {
    path: '',
    component: DeliviriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliviriesPageRoutingModule {}
