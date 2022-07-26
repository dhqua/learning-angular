import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // constructor() { }

  getAuthors(): string[] 
  {
    return ["Rick Riordan", "Robert Kyosaki", "Oscar Wilde"]
  }
}
