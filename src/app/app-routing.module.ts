import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagComponent } from './bag/bag.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'browse',
    component: BrowsePageComponent
  },
  {
    path:'view/:id',
    component: ViewComponent
  },
  {
    path:'bag',
    component: BagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
