import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { MainModule } from './main/main.module';
import { MainRoutingModule } from './main/main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [LoginComponent, ReportComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MainModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class PagesModule { }
