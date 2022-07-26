import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-custom-pipe',
  templateUrl: './test-custom-pipe.component.html',
  styleUrls: ['./test-custom-pipe.component.css']
})
export class TestCustomPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputText = "";
  resultText = "test";

  updateResult(){
    this.resultText = this.inputText;
  }

}
