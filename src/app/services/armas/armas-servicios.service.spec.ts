import { TestBed } from '@angular/core/testing';

import { ArmasServiciosService } from './armas-servicios.service';

describe('ArmasServiciosService', () => {
  let service: ArmasServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmasServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
