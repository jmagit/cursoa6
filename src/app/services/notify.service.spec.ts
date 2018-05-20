import { TestBed, inject } from '@angular/core/testing';

import { NotifyService } from './notify.service';
import { LoggerService } from '../../agio-core';

describe('NotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotifyService, LoggerService, ]
     });
  });

  it('should be created', inject([NotifyService], (service: NotifyService) => {
    expect(service).toBeTruthy();
  }));
});
