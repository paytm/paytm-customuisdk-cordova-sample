import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpiCollectPageRoutingModule } from './upi-collect-routing.module';

import { UpiCollectPage } from './upi-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpiCollectPageRoutingModule
  ],
  declarations: [UpiCollectPage]
})
export class UpiCollectPageModule {}
