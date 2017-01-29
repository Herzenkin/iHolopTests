import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Holop } from './../service/holop';
import { HolopService } from './../service/holop.service';

@Component({
  moduleId: module.id,
  selector: 'holop-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private holopService: HolopService,
    private location: Location
  ) {  }

  holop: Holop = new Holop();

  ngOnInit(): void {
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

  save(): void {
    this.holopService.save(this.holop)
      .subscribe(
        data => this.location.back()
      );
  }

  back(): void {
    this.location.back();
  }
}
