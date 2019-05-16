import { Injectable } from '@angular/core';
import { ChoosedEquipmentForm } from 'src/app/partials/choose-equipment/choose-equipment.component';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChooseEquipmentService {

  private choosedEquipmentForm: ChoosedEquipmentForm;
  private obsActiveChooseEquipment = new Subject<boolean>()

  constructor() { }

  public set choosedEquipment(data: ChoosedEquipmentForm) {
    this.choosedEquipmentForm = data;
  }

  public get choosedEquipment(): ChoosedEquipmentForm {
    return this.choosedEquipmentForm;
  }

  public get isChooseEquipmentEmpty(): boolean {
    return this.choosedEquipmentForm === undefined;
  }

  public activeChoooseEquipment() {
    this.obsActiveChooseEquipment.next(true);
  }

  public receiveToChooseEquipment(): Observable<boolean> {
    return this.obsActiveChooseEquipment.asObservable()
  }
}
