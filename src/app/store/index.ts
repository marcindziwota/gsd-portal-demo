import { combineReducers, ActionReducer, Action, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleWithProviders } from '@angular/core';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HceReducer, IHce } from './hce/hce.reducer';
import { HceEffects } from './hce/hce.effects';

import { RequestReducer, IRequest } from './request/request.reducer';
import { RequestEffects } from './request/request.effects';

import { environment } from '../../environments/environment';

// all new reducers should be define here
export interface IAppState {
  hce: IHce;
  request: IRequest;
}

// all new reducers should be define here
const reducers = {
  hce: HceReducer,
  request: RequestReducer
};

const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);
const developmentReducer: ActionReducer<IAppState> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: IAppState, action: Action) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const store: ModuleWithProviders = StoreModule.provideStore(reducer);
export const instrumentation: ModuleWithProviders =  (!environment.production) ? StoreDevtoolsModule.instrumentOnlyWithExtension() : undefined;

export const effects: ModuleWithProviders[] = [
  EffectsModule.run(HceEffects),
  EffectsModule.run(RequestEffects)
];
