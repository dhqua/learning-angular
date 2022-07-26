import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star-button',
  templateUrl: './star-button.component.html',
  styleUrls: ['./star-button.component.css']
})
export class StarButtonComponent  {
  isActive = false;
  clickImg(){
    this.isActive = !this.isActive;
  }
}
