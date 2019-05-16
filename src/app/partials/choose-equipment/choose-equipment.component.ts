import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChooseEquipmentService } from 'src/app/core/services/choose-equipment.service';

export interface ChoosedEquipmentForm {
  ssidName: string;
  ssidPassword: string;
  ssid50Name: string;
  ssid50Password: string;
  equipament: string;
}

@Component({
  selector: 'app-choose-equipment',
  templateUrl: './choose-equipment.component.html',
  styleUrls: ['./choose-equipment.component.css']
})
export class ChooseEquipmentComponent implements OnInit {

  public equipament = 'vap';
  public ssidName = new FormControl('', [Validators.required]);
  public ssidPassword = new FormControl('', [Validators.required]);
  public ssid50Name = new FormControl('', [Validators.required]);
  public ssid50Password = new FormControl('', [Validators.required]);

  @Input() display = false;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() choosedEquipment = new EventEmitter<boolean>();

  constructor(
    private chooseEquipmentService: ChooseEquipmentService
  ) { }

  ngOnInit() {
  }

  onClickEmitCancelAction(value: boolean) {
    this.cancel.emit(value);
  }

  onClickEmitNoticeChoosedEquipment(value: boolean) {
    let choosedEquipmentForm: ChoosedEquipmentForm;

    if (this.ssidName.value && this.ssidPassword.value &&
        this.ssid50Name.value && this.ssid50Password.value) {
      choosedEquipmentForm = {
        ssidName: this.ssidName.value,
        ssidPassword: this.ssidPassword.value,
        ssid50Name: this.ssid50Name.value,
        ssid50Password: this.ssid50Password.value,
        equipament: this.equipament
      };
      this.chooseEquipmentService.choosedEquipment = choosedEquipmentForm;
      this.choosedEquipment.emit(value);
    } else {
      window.alert('You must fill all the fields!');
      this.choosedEquipment.emit(true);
    }
  }

  onFocusEmptyField(field: string) {
    if (field === 'ssidName') {
      this.ssidName.setValue('');
    } else if (field === 'ssidPassword') {
      this.ssidPassword.setValue('');
    } else if (field === 'ssid50Name') {
      this.ssid50Name.setValue('');
    } else if (field === 'ssid50Password') {
      this.ssid50Password.setValue('');
    }
  }

  getSsidNameErrorMessage() {
    return this.ssidName.hasError('required') ? 'You must enter a value' : '';
  }

  getSsidPasswordErrorMessage() {
    return this.ssidPassword.hasError('required') ? 'You must enter a value' : '';
  }

  getSsid50NameErrorMessage() {
    return this.ssid50Name.hasError('required') ? 'You must enter a value' : '';
  }

  getSsid50PasswordErrorMessage() {
    return this.ssid50Password.hasError('required') ? 'You must enter a value' : '';
  }
}
