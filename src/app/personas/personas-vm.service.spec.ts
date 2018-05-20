import { TestBed, inject } from '@angular/core/testing';

import { PersonasVMService } from './personas-vm.service';
import { LoggerService } from '../../agio-core';
import { Router } from '@angular/router';

describe('PersonasVMService', () => {
  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      providers: [PersonasVMService, LoggerService, { provide: Router, useValue: routerSpy }]
    });
  });

  it('should be created', inject([PersonasVMService], (service: PersonasVMService) => {
    expect(service).toBeTruthy();
  }));
});
