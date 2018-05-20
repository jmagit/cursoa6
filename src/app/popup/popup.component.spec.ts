import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupComponent } from './popup.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NotifyService } from '../services/notify.service';
import { LoggerService } from '../../agio-core';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      providers: [ NotifyService, LoggerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
