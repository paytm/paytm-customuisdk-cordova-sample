import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpiPushPage } from './upi-push.page';

const routes: Routes = [
  {
    path: '',
    component: UpiPushPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpiPushPageRoutingModule {}
