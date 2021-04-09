import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input()
  currentPage?: string;
  @Input() names: string[] = [];
  @Input() routes: string[] = [];
  @Input() header: any;

  constructor() {}

  ngOnInit() {}
}
