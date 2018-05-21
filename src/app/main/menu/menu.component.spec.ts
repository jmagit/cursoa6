import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { RouterLinkActive, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterStubsModule } from '../../../testing/router-link-directive-stub';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      providers: [ { provide: Router, useValue: routerSpy } ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      imports: [ RouterStubsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
