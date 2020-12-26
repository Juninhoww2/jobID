import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliviriesPageRoutingModule } from './deliviries-routing.module';

import { DeliviriesPage } from './deliviries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliviriesPageRoutingModule
  ],
  declarations: [DeliviriesPage]
})
export class DeliviriesPageModule {}
