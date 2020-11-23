import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.scss']
})
export class BrowsePageComponent implements OnInit {
  selectedIndex = 0;
  tags = ["All", "Among Us", "K-pop", "Halloween", "Someee"];
  cards = [{
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
  },{
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
  },{
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
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('some','thing');
  }
  setSelectedIndex(i){
  this.selectedIndex = i;
}
}
