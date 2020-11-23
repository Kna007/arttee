import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('search') search:ElementRef;
  
  constructor(){
    
  }
  ngAfterViewInit(): void {
    
  }
  title = 'customer';
  open =false;
  searchOpen = false;
  closeAlert = false;
  openSearch(){
    this.searchOpen = true;
    this.search.nativeElement.focus();
  }
}
