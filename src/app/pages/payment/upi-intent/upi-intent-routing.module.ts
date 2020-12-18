import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpiIntentPage } from './upi-intent.page';

const routes: Routes = [
  {
    path: '',
    component: UpiIntentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpiIntentPageRoutingModule {}
