import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementshomeComponent } from './elementshome/elementshome.component';


@NgModule({
  declarations: [
    ElementshomeComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports:[ElementshomeComponent]
})
export class ElementsModule { }
