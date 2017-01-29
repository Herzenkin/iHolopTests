import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Holop } from './../service/holop';
import { HolopService } from './../service/holop.service';

@Component({
  moduleId: module.id,
  selector: 'holops',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  constructor(
    private holopService: HolopService,
    private router: Router
  ) {  }

  holops: Holop[] = [];
  singleHolop: Holop = new Holop();

  ngOnInit(): void {
    this.holopService.getAll()
      .subscribe(
        data => this.holops = data
      );
  }

  add(): void {
    this.router.navigate(['/add']);
  }

  edit(holop: Holop): void {
    this.router.navigate(['/edit', holop.id]);
  }

  delete(holop: Holop): void {
    this.holopService.delete(holop.id)
      .subscribe(
        data => this.holops = this.holops.filter(h => h !== holop)
      );
  }
}
