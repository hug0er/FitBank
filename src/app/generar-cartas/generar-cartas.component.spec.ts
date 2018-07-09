import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCartasComponent } from './generar-cartas.component';

describe('GenerarCartasComponent', () => {
  let component: GenerarCartasComponent;
  let fixture: ComponentFixture<GenerarCartasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarCartasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
