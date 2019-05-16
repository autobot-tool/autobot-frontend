import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChooseEquipmentService } from 'src/app/core/services/choose-equipment.service';
import { Router } from '@angular/router';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('mainNav') mainNav: ElementRef;

  constructor(
    private chooseEquipmentService: ChooseEquipmentService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onMouseOverActiveIcon(iconame: string, activeIconame: string) {
    const childNodes = this.mainNav.nativeElement.childNodes;
    
    for (let i = 0; i < childNodes.length; i++) {
      const img = childNodes[i].firstElementChild.firstElementChild;
      if (img.src.endsWith(iconame)) {
        img.src = '../../../assets/resources/img/' + activeIconame;
      }
    }
  }

  onMouseOutDisableActiveIcon(iconame: string, activeIconame: string) {
    const childNodes = this.mainNav.nativeElement.childNodes;

    for (let i = 0; i < childNodes.length; i++) {
      const img = childNodes[i].firstElementChild.firstElementChild;
      if (img.src.endsWith(activeIconame)) {
        img.src = '../../../assets/resources/img/' + iconame;
      }
    }
  }

  onClickActiveChooseEvent() {
    this.chooseEquipmentService.choosedEquipment = undefined;
    this.router.navigate(['main/equipments']);
  }

  public get isChoosedEquipmentEmpty(): boolean {
    return this.chooseEquipmentService.isChooseEquipmentEmpty;
  }

  makeLogout() {
    sessionStorage.removeItem('token');
    document.location.reload();
  }

  makeSignup() {
    this.router.navigate(['main/signup']);
  }

  dutSelected(): boolean {
    if (this.chooseEquipmentService.isChooseEquipmentEmpty || this.chooseEquipmentService.choosedEquipment.equipament === 'vap') {
      return false;
    } else {
      return true;
    }
  }

  dutSelectedBoth(): boolean {
    if (this.chooseEquipmentService.isChooseEquipmentEmpty) {
      return false;
    } else {
      return true;
    }
  }

  public choosedDUT(): string {
    if(this.chooseEquipmentService.choosedEquipment.equipament === 'vap') {
      return 'VAP 4641';
    } else {
      return 'NET 3P';
    }
  }
}
