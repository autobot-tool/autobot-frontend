import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { UiTestsComponent } from './ui-tests/ui-tests.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Wifi24Component } from './wifi24/wifi24.component';
import { Wifi5Component } from './wifi5/wifi5.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { SignupComponent } from './signup/signup.component';
import { ResultsComponent } from './results/results.component';

const mainRoutes: Routes = [
    {
      path: 'main',
      component: MainComponent,
      children: [
        { path: '', component: HomeComponent, canActivate: [AuthGuard] },
        { path: 'equipments', component: EquipmentsComponent, canActivate: [AuthGuard] },
        { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
        { path: 'ui', component: UiTestsComponent, canActivate: [AuthGuard] },
        { path: 'wifi24', component: Wifi24Component, canActivate: [AuthGuard] },
        { path: 'wifi5', component: Wifi5Component, canActivate: [AuthGuard] },
        { path: 'results', component: ResultsComponent, canActivate: [AuthGuard] }
      ],
      canActivate: [AuthGuard] 
    }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
