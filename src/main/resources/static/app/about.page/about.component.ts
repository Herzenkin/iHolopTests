import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  description: String = `This application is build for demonstration purpose only
  and does not aim to hurt somebody's feelings. Any reference to living persons
  or real events is purely conincidental.`;

  constructor() {  }

  ngOnInit() {}
}
