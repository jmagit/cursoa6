import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LocalDecimalPipe, CapitalizePipe, ElipsisPipe, LoggerService } from '../../agio-core';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent, LocalDecimalPipe, CapitalizePipe, ElipsisPipe ],
      providers: [ LoggerService ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
