import { AuthGuard } from './auth/auth-guard';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { loadChildren: 'app/home/home.module#HomeModule', path: '' },
  { loadChildren: 'app/hce/hce.module#HceModule', path: 'hces', canActivate: [AuthGuard] },
  { loadChildren: 'app/request/request.module#RequestModule', path: 'request', canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: false
  }
);
