import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card;
  // card = {
  //   title: 'Title of the design',
  //   color: 'NAVY',
  //   frontImage : 'https://source.unsplash.com/random/300x400'
  // }
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.card);
  }

}
