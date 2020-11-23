import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagComponent } from './bag/bag.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { CustomizeComponent } from './customize/customize.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import{PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'browse',
    component:BrowsePageComponent
  },
  {
    path:'view/:id',
    component: ViewComponent
  },
  {
    path:'customize',
    component: CustomizeComponent
  },
  {
    path:'bag',
    component: BagComponent
  },
  {
    path:'**',
    redirectTo:'/home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
