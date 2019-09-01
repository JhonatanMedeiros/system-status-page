import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ssp-pages',
  template: `
    <ssp-one-column>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ssp-one-column>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
