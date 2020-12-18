import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetbankingPageRoutingModule } from './netbanking-routing.module';

import { NetbankingPage } from './netbanking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetbankingPageRoutingModule
  ],
  declarations: [NetbankingPage]
})
export class NetbankingPageModule {}
