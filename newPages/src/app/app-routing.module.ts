import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes:Routes=[

    {path:'elements', loadChildren:()=>import('./elements/elements.module').then(e=>e.ElementsModule)},
    {path:'collections', loadChildren:()=>import('./collections/collections.module').then(e=>e.CollectionsModule)},
    {path:'view', loadChildren:()=>import('./views/views.module').then(e=>e.ViewsModule)},
    {path:"mods", loadChildren:()=>import('./mods/mods.module').then(e=>e.ModsModule)},
    // {path:'view', loadchildren:()=>('./views/views.module').then(e=>e.viewsModule)},
{path:'',component:HomeComponent},
{path:'**',component:NotFoundComponent}//star
]
@NgModule({
 
    imports: [
  
      RouterModule.forRoot(routes),
     
    ],
    exports:[RouterModule]
  
  })
  export class AppRoutingModule{ }