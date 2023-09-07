import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomComponent } from './collection-hom/collection-hom.component';
import { BiograohyComponent } from './biograohy/biograohy.component';
import { CompanyComponent } from './company/company.component';
import { PaerternerComponent } from './paerterner/paerterner.component';

const routes: Routes = [
  {path:"",component:CollectionHomComponent,
children:[
  {path:'',component:BiograohyComponent},
  {path:'Companies',component:CompanyComponent},
  {path:'partners',component:PaerternerComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
