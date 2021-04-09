import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Icone, Button } from '../../../../core/domain/toolbar-content.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GetSessionNavigationUsecase } from 'src/app/core/usecases/session-navigation/get-session-navigation.usecase';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.scss'],
})
export class ToolbarComponent implements OnChanges {
  @Input() icons: Icone[] = [];
  @Input() redirect: string = null;
  @Input() buttons: Button[] = [];

  getBreadcrumb = () => {
    const listAll = this.getSessionNavigation.execute();

    console.log(this.route);
    const list = listAll.filter((l) => l.path == this.route['_routerState'].snapshot.url);

    const listBread = [];
    list.map((l) => {
      l.breadcrumb.map((b) => {
        listBread.push(b);
      });
    });
    return listBread;
  };

  @Input() labelLink: any[] = [];
  label: any[] = [];
  ngOnChanges() {
    if (typeof this.labelLink == 'string') {
      return [{ title: this.labelLink, link: '' }];
    }

    if (!this.labelLink) {
      this.labelLink = this.getBreadcrumb();
    }

    this.label = this.labelLink.map((l, i) => {
      let title = l.title;

      if (i < this.labelLink.length - 1) {
        title += ' | ';
      }

      return { title, link: l.link, queryParams: l.queryParams };
    });
  }

  voltarPagina(redirect: string) {
    redirect ? this.router.navigate(['/' + redirect]) : this._location.back();
  }

  irParaPagina(item) {
    item.link && this.router.navigate(['/' + item.link], { queryParams: item.queryParams });
  }

  constructor(
    private _location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private getSessionNavigation: GetSessionNavigationUsecase
  ) {}
}
