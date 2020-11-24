import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fabric } from 'fabric';
@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements AfterViewInit {
  @ViewChild('shirtLayer') shirtLayer: ElementRef;
  constructor() { }
  dropdownClicked = false;
  selectedColor = 'BLACK'
  ngAfterViewInit(): void {
    this.shirtLayer.nativeElement.width = window.innerWidth * 0.8;
    this.shirtLayer.nativeElement.height = window.innerWidth * 0.8* 1.2;
    let shirtLayerContext = this.shirtLayer.nativeElement.getContext('2d');
    let shirtImage = new Image();
    shirtImage.src = '/assets/BLACK-BACK.png';
    shirtImage.onload = () =>{
      shirtLayerContext.drawImage(shirtImage,0,0,shirtImage.width,shirtImage.height);
    }
  }

}
