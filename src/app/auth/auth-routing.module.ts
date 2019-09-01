import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const ROUTES: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES)
  ]
})
export class AuthRoutingModule { }
