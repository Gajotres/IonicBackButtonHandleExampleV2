import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBPage } from './page-b.page';

describe('PageBPage', () => {
  let component: PageBPage;
  let fixture: ComponentFixture<PageBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
