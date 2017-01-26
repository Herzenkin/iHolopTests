import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Holop } from './holop';
import { ActivatedRoute, Params } from '@angular/router';
import { HolopService } from './holop.service';
import { Location } from '@angular/common';

@Component({
  selector: 'holop-details',
  templateUrl: './templates/details.component.html',
})
export class DetailsComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private holopService: HolopService,
    private location: Location
  ) {  }

  ngOnInit() {
    this.activeRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      if (isNaN(id)) {
        return;
      }
      this.holopService.get(id)
        .subscribe(
          data =>
            this.holop = data

        )
    })
  }

  holop: Holop = new Holop();

  save(): void {
    this.holopService.save(this.holop)
      .subscribe(
        data => this.location.back()
      );
  }
}
