import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModshomeComponent } from './modshome/modshome.component';

const routes: Routes = [
  {path:'', component:ModshomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
