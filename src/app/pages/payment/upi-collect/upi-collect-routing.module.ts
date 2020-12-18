import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpiCollectPage } from './upi-collect.page';

const routes: Routes = [
  {
    path: '',
    component: UpiCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpiCollectPageRoutingModule {}
