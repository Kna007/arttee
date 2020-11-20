import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {

  constructor() { }
  orders = [{
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
  }]
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
  ngOnInit(): void {
    console.log(localStorage.getItem('some'))
  }

}
