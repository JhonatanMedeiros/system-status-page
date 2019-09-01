import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';

import { HeaderComponent } from './components/header/header.component';
import { OneColumnComponent } from './layouts/one-column/one-column.component';

import { LayoutService } from './services/layout.service';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
];

const COMPONENTS = [
  HeaderComponent,
  OneColumnComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, ...NB_MODULES],
  exports: [CommonModule, RouterModule, ...COMPONENTS],
  declarations: [...COMPONENTS, FooterComponent]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: [
        LayoutService,
        ...NbThemeModule.forRoot(
          { name: 'default' },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ],
        ).providers,
      ],
    } as ModuleWithProviders;
  }
}
