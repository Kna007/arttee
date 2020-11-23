import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { ViewComponent } from './view/view.component';
import { BagComponent } from './bag/bag.component';
import { CustomizeComponent } from './customize/customize.component';
import {ReusableModule} from './reusable/reusable.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowsePageComponent,
    ViewComponent,
    BagComponent,
    CustomizeComponent
  ],
  imports: [
    ReusableModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
