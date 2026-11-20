import { TestBed } from '@angular/core/testing';

import { ServiceAdministrarPublicaciones } from './service-administrar-publicaciones';

describe('ServiceAdministrarPublicaciones', () => {
  let service: ServiceAdministrarPublicaciones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdministrarPublicaciones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
