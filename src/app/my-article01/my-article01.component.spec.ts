import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArticle01Component } from './my-article01.component';

describe('MyArticle01Component', () => {
  let component: MyArticle01Component;
  let fixture: ComponentFixture<MyArticle01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArticle01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArticle01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
