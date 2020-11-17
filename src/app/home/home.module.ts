import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableModule } from '../reusable/reusable.module';



@NgModule({
  declarations: [HomeModule],
  imports: [
    CommonModule, ReusableModule
  ]
})
export class HomeModule { }
