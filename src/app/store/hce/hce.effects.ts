import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { HCE_GET, HCE_GET_FAIL, HCE_GET_SUCCESS } from './hce.actions';

@Injectable()
export class HceEffects {

  @Effect()
  hceGet$ = this.actions$
    .ofType(HCE_GET)
    .switchMap((action: Action) => {

      var retVal =  this.http.get('/api/hce', action.payload)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: HCE_GET_FAIL })))
        .map((response) => ({type: HCE_GET_SUCCESS, payload: response}));

      return retVal;

    });

  constructor(private actions$: Actions, private http: Http) {}
}
