import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'errors',
  template: `
    <h1>You Missed!</h1>
    <img src="./images/404.gif" class="center-block">
  `
})
export class ErrorComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
