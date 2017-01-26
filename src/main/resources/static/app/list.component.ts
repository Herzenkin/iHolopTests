import { Component, OnInit } from '@angular/core';
import { Holop } from './holop';
import { HolopService } from './holop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'holops',
  templateUrl: './../templates/list.component.html'
})
export class ListComponent implements OnInit {
  constructor(
    private holopService: HolopService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.holopService.getAll()
      .subscribe(
        data => this.holops = data
      );
  }

  holops: Holop[] = [];
  singleHolop: Holop = new Holop();

  save(holop: Holop): void {
    this.holops.push(holop);
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

  add(): void {
    this.router.navigate(['/add']);
  }
}
