import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './reusable/card/card.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { ViewComponent } from './view/view.component';
import { BagComponent } from './bag/bag.component';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    BrowsePageComponent,
    ViewComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
