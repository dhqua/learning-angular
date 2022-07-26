import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  {
  authorsList: string[];

  constructor(service: ListService) { 
    this.authorsList = service.getAuthors();  
  }

}
