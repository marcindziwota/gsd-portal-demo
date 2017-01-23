import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { IAppState } from './store/index';
import { HCE_GET } from './store/hce/hce.actions';
import { Auth } from './auth/auth.service';

@Component({
  providers: [ Auth ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  observable$: Observable<{}>;

  constructor(http: Http, store: Store<IAppState>, private auth: Auth) {

     store.dispatch({
      type: HCE_GET
    });
  }
}
