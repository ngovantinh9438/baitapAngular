import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArticle02Component } from './my-article02.component';

describe('MyArticle02Component', () => {
  let component: MyArticle02Component;
  let fixture: ComponentFixture<MyArticle02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArticle02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArticle02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
