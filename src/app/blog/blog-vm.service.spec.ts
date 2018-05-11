import { TestBed, inject } from '@angular/core/testing';

import { BlogVMService } from './blog-vm.service';

describe('BlogVMService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogVMService]
    });
  });

  it('should be created', inject([BlogVMService], (service: BlogVMService) => {
    expect(service).toBeTruthy();
  }));
});
