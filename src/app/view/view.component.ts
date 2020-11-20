import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../reusable/card/card.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  constructor() { }
  card = {
    title: 'Title of the design',
    color: 'WHITE',
    type: 'backPriority',
    description: 'this a long established fact that a reader will be distracted by the readable content of a page when looking  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    images : {
      frontImage: 'https://source.unsplash.com/random/300x400',
      backImage: 'https://source.unsplash.com/random/300x400'
    },
    designer:{
      description:"that a reader will be distracted by the readable content of a page when looking  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the "
    }
  }
  recommendCards = [{
    title: 'Title of the design #1',
    color: 'BLACK',
    type: 'frontOnly',
    images:{
      frontImage:'https://source.unsplash.com/random/300x400'
    }
  },{
    title: 'Title of the design #2',
    color: 'WHITE',
    type: 'backOnly',
    images:{
      backImage : 'https://source.unsplash.com/random/300x400'
    }
    
  },{
    title: 'Title of the design',
    color: 'NAVY',
    type: 'frontPriority',
    images : {
      frontImage: 'https://source.unsplash.com/random/300x400',
      backImage: 'https://source.unsplash.com/random/300x400'
    }
  },{
    title: 'Title of the design',
    color: 'WHITE',
    type: 'backPriority',
    images : {
      frontImage: 'https://source.unsplash.com/random/300x400',
      backImage: 'https://source.unsplash.com/random/300x400'
    }
  },
]
  selectedSize;
  selectedColor = this.card.color;
  ngOnInit(): void {
  }
  selectColor(color){
    this.selectedColor = color;
  }
  selectSize(size){
    this.selectedSize = size;
  }
}
