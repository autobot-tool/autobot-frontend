import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';
import { ChooseEquipmentService } from 'src/app/core/services/choose-equipment.service';

@Component({
  selector: 'app-wifi5',
  templateUrl: './wifi5.component.html',
  styleUrls: ['./wifi5.component.css']
})
export class Wifi5Component implements OnInit {

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
            if (value.suite === 'wifi5' && value.dut === this.chooseEquipmentService.choosedEquipment.equipament) {
              return value;
            }
          });
        }
      },
      err => console.error(err)
    );
  }

}
