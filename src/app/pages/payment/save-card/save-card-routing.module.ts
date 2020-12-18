import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveCardPage } from './save-card.page';

const routes: Routes = [
  {
    path: '',
    component: SaveCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveCardPageRoutingModule {}
