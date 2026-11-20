import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPublicaciones } from './view-publicaciones';

describe('ViewPublicaciones', () => {
  let component: ViewPublicaciones;
  let fixture: ComponentFixture<ViewPublicaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPublicaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPublicaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
