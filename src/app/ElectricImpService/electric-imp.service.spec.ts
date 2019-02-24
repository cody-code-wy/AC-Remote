import { TestBed } from '@angular/core/testing';

import { ElectricImpService } from './electric-imp.service';

describe('ElectricImpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectricImpService = TestBed.get(ElectricImpService);
    expect(service).toBeTruthy();
  });
});
