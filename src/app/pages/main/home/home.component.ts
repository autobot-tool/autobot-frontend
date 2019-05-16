import { Component, OnInit } from '@angular/core';
import { ChooseEquipmentService } from 'src/app/core/services/choose-equipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isChooseEquipment = false;

  constructor(
    private chooseEquipmentService: ChooseEquipmentService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickShowChooseEquipment() {
    this.router.navigate(['main/equipments']);
  }

  public get isChoosedEquipmentEmpty(): boolean {
    return this.chooseEquipmentService.isChooseEquipmentEmpty;
  }

}
