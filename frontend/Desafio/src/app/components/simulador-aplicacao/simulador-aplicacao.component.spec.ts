import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorAplicacaoComponent } from './simulador-aplicacao.component';

describe('SimuladorAplicacaoComponent', () => {
  let component: SimuladorAplicacaoComponent;
  let fixture: ComponentFixture<SimuladorAplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladorAplicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
