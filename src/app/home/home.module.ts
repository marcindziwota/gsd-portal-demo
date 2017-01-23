import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { routing } from './home.router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    MaterialModule.forRoot(),
  ],
  declarations: [
    HomeComponent
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule {}
