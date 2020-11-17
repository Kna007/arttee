import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer';
  open =false;
  searchOpen = false;
  something(){
    console.log('hello')
  }
}
