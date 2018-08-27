import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTopicListComponent } from './basic-topic-list.component';

describe('BasicTopicListComponent', () => {
  let component: BasicTopicListComponent;
  let fixture: ComponentFixture<BasicTopicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTopicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
