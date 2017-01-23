import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HceListComponent } from './hce-list.component';

const routes: Route[] = [
  {
    path: '',
    component: HceListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);