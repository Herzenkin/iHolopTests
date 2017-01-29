import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'errors',
  template: `
    <h2 align="center">Don't try to cheat - enter from the <a href="/">door.</a></h2>
    <img src="./../images/404.gif" class="center-block">
  `
})
export class ErrorComponent implements OnInit {
  constructor() {  }

  ngOnInit(): void {}
}
