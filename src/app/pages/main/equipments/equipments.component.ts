import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCancel(flag: boolean) {
    this.router.navigate(['main']);
  }

  onChoosedEquipment(flag: boolean) {
    if (!flag) {
      this.router.navigate(['main']);
    }
  }

}
