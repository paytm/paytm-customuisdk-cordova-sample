import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveCardPageRoutingModule } from './save-card-routing.module';

import { SaveCardPage } from './save-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveCardPageRoutingModule
  ],
  declarations: [SaveCardPage]
})
export class SaveCardPageModule {}
