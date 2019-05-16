import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { PartialsModule } from './partials/partials.module';
import { AuthGuard } from './guards/auth.guard';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    CoreModule,
    PagesModule,
    PartialsModule,
    NgxSpinnerModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [
    CoreModule,
    PagesModule,
    PartialsModule
  ]
})
export class AppModule { }
