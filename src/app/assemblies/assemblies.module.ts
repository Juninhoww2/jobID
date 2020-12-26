import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssembliesPageRoutingModule } from './assemblies-routing.module';

import { AssembliesPage } from './assemblies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssembliesPageRoutingModule
  ],
  declarations: [AssembliesPage]
})
export class AssembliesPageModule {}
