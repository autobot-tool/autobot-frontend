import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';
import { ChooseEquipmentService } from 'src/app/core/services/choose-equipment.service';

@Component({
  selector: 'app-wifi24',
  templateUrl: './wifi24.component.html',
  styleUrls: ['./wifi24.component.css']
})
export class Wifi24Component implements OnInit {

  public tests = [];

  constructor(
    private mainService: MainService,
    private chooseEquipmentService: ChooseEquipmentService
  ) { }

  ngOnInit() {
    this.mainService.tests().subscribe(
      json => {
        if (json) {
          this.tests = json.tests;
          this.tests = this.tests.filter((value) => {
            if (value.suite === 'wifi24' && value.dut === this.chooseEquipmentService.choosedEquipment.equipament) {
              return value;
            }
          });
        }
      },
      err => console.error(err)
    );
  }

}
