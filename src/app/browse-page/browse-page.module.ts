import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReusableModule} from '../reusable/reusable.module';


@NgModule({
  declarations: [BrowsePageModule],
  imports: [
    CommonModule, ReusableModule
  ]
})
export class BrowsePageModule { }
