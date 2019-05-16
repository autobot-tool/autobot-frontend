import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './services/login.service';
import { ChooseEquipmentService } from './services/choose-equipment.service';
import { HttpClientModule } from '@angular/common/http';
import { RestSettingsService } from './services/rest-settings.service';
import { MainService } from './services/main.service';
import { SignupService } from './services/signup.service';
import { ReportService } from './services/report.service';
import { ResultsService } from './services/results.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    ChooseEquipmentService,
    RestSettingsService,
    MainService,
    SignupService,
    ReportService,
    ResultsService
  ]
})
export class CoreModule { }
