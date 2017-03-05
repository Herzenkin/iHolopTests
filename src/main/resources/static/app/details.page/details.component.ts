import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private router: Router
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
        data => this.router.navigate(['/'])
      );
  }

  back(): void {
    this.router.navigate(['/']);
  }
}
