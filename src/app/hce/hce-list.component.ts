import { Component }  from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { IAppState } from '../store/index';
import { Observable } from 'rxjs';
import { IHce } from '../store/hce/hce.reducer';

@Component({
  selector: 'hce-list',
  templateUrl: './hce-list.component.html'
})

export class HceListComponent {

  hces$: Observable<IHce>;

  constructor(store: Store<IAppState>, private router: Router) {
     this.hces$ = store.select('hce');
  }

  createRequest(hceId){
      let link = ['/request/edit'];

      this.router.navigate(link, { queryParams: { hceid: hceId } });
  }
};