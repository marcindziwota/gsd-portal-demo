import { Action, ActionReducer } from '@ngrx/store';
import { HCE_GET_SUCCESS } from './hce.actions';

export interface IHce {
  sfid: string,
  name: string;
  type: string,
  address?: string
}

export class Hce implements IHce {  
    constructor (public sfid: string, public name: string, public type: string, public address?: string) {
    }
} 

let prettifyHce = (hce) => {
    return new Hce(hce.sfid, hce.name, hce.gsd_hcetype__c, hce.gsd_billingcountry2__c);
};

export const HceReducer: ActionReducer<IHce> = (state: IHce, action: Action): IHce => {

  switch (action.type) {

    case HCE_GET_SUCCESS:

      return Object.assign({}, state, {
        data: action.payload.map(prettifyHce)
      });

    default:
      return state;
  }
};
