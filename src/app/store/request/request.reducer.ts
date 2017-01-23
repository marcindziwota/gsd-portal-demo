import { Action, ActionReducer } from '@ngrx/store';
import { REQUEST_ADD_SUCCESS } from './request.actions';

export interface IRequest {
  title: string;
  description?: string;
}

export class Request implements IRequest {  
    constructor (public title: string, public description?: string) {
    }
} 

export const RequestReducer: ActionReducer<IRequest> = (state: IRequest, action: Action): IRequest => { 

  switch (action.type) {

    case REQUEST_ADD_SUCCESS:

      return Object.assign({}, state, {
        data: action.payload
      });

    default:
      return state;
  }
};
