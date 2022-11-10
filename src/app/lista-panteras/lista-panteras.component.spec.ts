import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPanterasComponent } from './lista-panteras.component';

describe('ListaPanterasComponent', () => {
  let component: ListaPanterasComponent;
  let fixture: ComponentFixture<ListaPanterasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPanterasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPanterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
