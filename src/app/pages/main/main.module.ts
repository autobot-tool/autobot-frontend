import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PartialsModule } from 'src/app/partials/partials.module';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatDialogModule, MatProgressSpinnerModule, MatFormField, MatFormFieldModule, MatInputModule, MatFormFieldControl, MatOptionModule, MatLabel, MatSelectModule, MatToolbarModule, MatButtonToggleModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UiTestsComponent } from './ui-tests/ui-tests.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Wifi24Component } from './wifi24/wifi24.component';
import { Wifi5Component } from './wifi5/wifi5.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { SignupComponent } from './signup/signup.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    MainComponent,
    UiTestsComponent,
    HomeComponent,
    Wifi24Component,
    Wifi5Component,
    EquipmentsComponent,
    SignupComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    PartialsModule,
    MatButtonModule,
    RouterModule,
    MatCheckboxModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class MainModule { }
