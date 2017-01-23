import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { RequestListComponent } from './request-list.component';
import { RequestEditComponent } from './edit/request.edit.component';
import { routing } from './request.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    routing,
    SharedModule
  ],
  declarations: [
    RequestEditComponent,
    RequestListComponent
  ],
  bootstrap: [
    RequestListComponent
  ]
})
export class RequestModule {}
