import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpiPushPageRoutingModule } from './upi-push-routing.module';

import { UpiPushPage } from './upi-push.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpiPushPageRoutingModule
  ],
  declarations: [UpiPushPage]
})
export class UpiPushPageModule {}
