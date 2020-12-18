import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetbankingPage } from './netbanking.page';

const routes: Routes = [
  {
    path: '',
    component: NetbankingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetbankingPageRoutingModule {}
