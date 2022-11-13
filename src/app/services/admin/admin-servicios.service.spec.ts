import { TestBed } from '@angular/core/testing';

import { AdminServiciosService } from './admin-servicios.service';

describe('AdminServiciosService', () => {
  let service: AdminServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
