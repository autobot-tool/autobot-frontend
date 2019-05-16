import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';
import { ChooseEquipmentService } from 'src/app/core/services/choose-equipment.service';

@Component({
  selector: 'app-ui-tests',
  templateUrl: './ui-tests.component.html',
  styleUrls: ['./ui-tests.component.css']
})
export class UiTestsComponent implements OnInit {

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
            if (value.suite === 'uitests' && value.dut === this.chooseEquipmentService.choosedEquipment.equipament) {
              return value;
            }
          });
        }
      },
      err => console.error(err)
    );
  }

}
