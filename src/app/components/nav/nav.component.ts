import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AirplaneModel } from 'src/app/core/domain/airplane.model';
import { GetAllAirplaneUsecase } from 'src/app/core/usecases/airplane/get-all-airplane.usecase';
import { PageFilterModel } from 'src/app/core/utils/page-filter.model';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit {
  active = 'Airplane';
  airplanes?: AirplaneModel[];

  constructor(private router: Router, private getAllAirplane: GetAllAirplaneUsecase) {}

  ngOnInit() {
    this.getAllAirplane.execute(new PageFilterModel()).subscribe((x) => {
      this.airplanes = x.data;
    });
  }
}
