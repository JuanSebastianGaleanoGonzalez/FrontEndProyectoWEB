import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoArmasComponent } from './listado-armas.component';

describe('ListadoArmasComponent', () => {
  let component: ListadoArmasComponent;
  let fixture: ComponentFixture<ListadoArmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoArmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoArmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
