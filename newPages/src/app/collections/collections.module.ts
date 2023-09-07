import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomComponent } from './collection-hom/collection-hom.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiograohyComponent } from './biograohy/biograohy.component';
import { PaerternerComponent } from './paerterner/paerterner.component';
import { CompanyComponent } from './company/company.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CollectionHomComponent,
    TableComponent,
    BiograohyComponent,
    PaerternerComponent,
    CompanyComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],

})
export class CollectionsModule { }
