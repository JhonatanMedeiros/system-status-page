import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ThemeModule } from './@theme/theme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbMenuModule, NbSidebarModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
