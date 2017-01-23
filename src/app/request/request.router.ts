import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RequestEditComponent } from './edit/request.edit.component';
import { RequestListComponent } from './request-list.component';

const routes: Route[] = [
  {
    path: '',
    component: RequestListComponent
  },
  {
    path: 'edit',
    component: RequestEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
