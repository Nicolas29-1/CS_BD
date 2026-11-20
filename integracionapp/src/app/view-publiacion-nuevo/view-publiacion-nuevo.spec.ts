import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPubliacionNuevo } from './view-publiacion-nuevo';

describe('ViewPubliacionNuevo', () => {
  let component: ViewPubliacionNuevo;
  let fixture: ComponentFixture<ViewPubliacionNuevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPubliacionNuevo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPubliacionNuevo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
