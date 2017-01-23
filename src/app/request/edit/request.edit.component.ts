import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Request } from '../../store/request/request.reducer';
import { IAppState } from '../../store';
import { Store } from '@ngrx/store';
import { REQUEST_ADD } from '../../store/request/request.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'request-edit',
  templateUrl: './request.edit.component.html',
})
export class RequestEditComponent implements OnInit {

  form: FormGroup;

  createRequest() { 
    this.store.dispatch({
        type: REQUEST_ADD,
        payload: this.form.value
      });

    this.form.reset();
  }
  
  constructor(public fb: FormBuilder, public store: Store<IAppState>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {

       this.form = this.fb.group({
          'sfid': this.route.snapshot.queryParams['hceid'],
          'title': ['', Validators.required],
          'description': ['']
    });
  }
}
