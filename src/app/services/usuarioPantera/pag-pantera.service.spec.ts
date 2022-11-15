import { TestBed } from '@angular/core/testing';

import { PagPanteraService } from './pag-pantera.service';

describe('PagPanteraService', () => {
  let service: PagPanteraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagPanteraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
