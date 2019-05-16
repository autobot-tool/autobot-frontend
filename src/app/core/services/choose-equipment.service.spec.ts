import { TestBed } from '@angular/core/testing';

import { ChooseEquipmentService } from './choose-equipment.service';

describe('ChooseEquipmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChooseEquipmentService = TestBed.get(ChooseEquipmentService);
    expect(service).toBeTruthy();
  });
});
