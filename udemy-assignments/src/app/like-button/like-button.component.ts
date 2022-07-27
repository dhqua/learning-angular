import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isActive = false;
  @Input() likeCount = 0;

  clickImg(){
    if(!this.isActive)
      this.likeCount++;
    else
      this.likeCount--;

    this.isActive = !this.isActive;
  }
}
