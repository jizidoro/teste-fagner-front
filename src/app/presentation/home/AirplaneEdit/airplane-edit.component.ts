import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airplane-edit',
  templateUrl: './airplane-edit.component.html',
  styleUrls: ['./airplane-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AirplaneEditComponent implements OnInit {
  titleModal = 'modal bla';

  constructor(private router: Router) {}
  ngOnInit() {
    console.log('teste');
  }
}
