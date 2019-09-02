import { NgModule } from '@angular/core';

import { NbCardModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    NotFoundComponent]
})
export class PagesModule { }
