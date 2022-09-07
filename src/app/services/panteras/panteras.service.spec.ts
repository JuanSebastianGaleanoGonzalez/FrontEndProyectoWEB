import { TestBed } from '@angular/core/testing';

import { PanterasService } from './panteras.service';

describe('PanterasService', () => {
  let service: PanterasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanterasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
