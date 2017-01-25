import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HceListComponent } from './hce-list.component';
import { routing } from './hce.router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [
    HceListComponent
  ],
  bootstrap: [
    HceListComponent
  ]
})
export class HceModule {}
