import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import {
  REQUEST_ADD, REQUEST_ADD_FAIL, REQUEST_ADD_SUCCESS
} from './request.actions';

@Injectable()
export class RequestEffects {

  @Effect()
  addRequest$ = this.actions$
    .ofType(REQUEST_ADD)
    .switchMap((action: Action) => {

      return this.http.post('/api/request', action.payload)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: REQUEST_ADD_FAIL })))
        .map((response) => ({type: REQUEST_ADD_SUCCESS, payload: response}));

    });

  constructor(private actions$: Actions, private http: Http) {}
}