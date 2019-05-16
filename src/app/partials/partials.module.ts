import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseEquipmentComponent } from './choose-equipment/choose-equipment.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatFormFieldControl, MatError, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListTestsComponent } from './list-tests/list-tests.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    ChooseEquipmentComponent, 
    ListTestsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    MatCheckboxModule
  ],
  exports: [
    ChooseEquipmentComponent, 
    ListTestsComponent
  ]
})
export class PartialsModule { }
