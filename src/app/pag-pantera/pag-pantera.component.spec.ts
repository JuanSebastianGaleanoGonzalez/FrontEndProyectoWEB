import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPanteraComponent } from './pag-pantera.component';

describe('PagPanteraComponent', () => {
  let component: PagPanteraComponent;
  let fixture: ComponentFixture<PagPanteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPanteraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPanteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
