import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpiIntentPageRoutingModule } from './upi-intent-routing.module';

import { UpiIntentPage } from './upi-intent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpiIntentPageRoutingModule
  ],
  declarations: [UpiIntentPage]
})
export class UpiIntentPageModule {}
