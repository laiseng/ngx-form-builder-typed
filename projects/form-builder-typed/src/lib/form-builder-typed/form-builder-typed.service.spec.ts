import { TestBed } from '@angular/core/testing';

import { FormBuilderTypedService } from './form-builder-typed.service';

describe('FormBuilderTypedService', () => {
  let service: FormBuilderTypedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuilderTypedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
