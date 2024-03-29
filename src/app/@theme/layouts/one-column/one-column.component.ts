import { Component } from '@angular/core';

@Component({
  selector: 'ssp-one-column',
  styleUrls: ['./one-column.component.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ssp-header></ssp-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
          <ssp-footer></ssp-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class OneColumnComponent {
}
