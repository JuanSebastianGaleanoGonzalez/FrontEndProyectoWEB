import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPanterasComponent } from './listado-panteras.component';

describe('ListadoPanterasComponent', () => {
  let component: ListadoPanterasComponent;
  let fixture: ComponentFixture<ListadoPanterasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPanterasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPanterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
