/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { About_usComponent } from './about_us.component';

describe('About_usComponent', () => {
  let component: About_usComponent;
  let fixture: ComponentFixture<About_usComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ About_usComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(About_usComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
